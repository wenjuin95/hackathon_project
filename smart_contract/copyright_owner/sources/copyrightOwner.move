module copyright::copyrightOwner {
    use std::string::String;
    use sui::transfer::{Receiving};
    const EAccessDenied: u64 = 0;
    const AutorizedReceiveAddr: address = @0xB0B;

    public struct CopyrightOwner has key, store {
        id: UID,
        owner: address,
        title: String,
        description: String,
        fileHash: u64,
        watermarkData: u64,
        creation_date: u64,
        price: u64,
    }

    //owner create copyright
    public fun create_copyright(
        owner: address, 
        title: String, 
        description: String, 
        fileHash: u64, 
        watermarkData: u64,
        creation_date: u64, 
        price: u64, 
        ctx: &mut TxContext 
        ) {
        let copyrightOwner = CopyrightOwner {
            id: object::new(ctx),
            owner,
            title,
            description,
            fileHash,
            watermarkData,
            creation_date,
            price,
        };
        // transfer::public_transfer(copyrightOwner, owner);
        transfer::share_object(copyrightOwner);
    }

    //owner remove copyright
    public fun remove_copyright(copyrightOwner: CopyrightOwner) {
        let CopyrightOwner {
            id,
            owner: _,
            title: _,
            description: _,
            fileHash: _,
            watermarkData: _,
            creation_date: _,
            price: _,
        } = copyrightOwner;
        object::delete(id);
    }

    //owner receive payment from buyer
    public fun receive_payment<T: key + store>(copyrightOwner: &mut CopyrightOwner, sent: Receiving<T>, ctx: &mut TxContext): T {
        assert!(tx_context::sender(ctx) == AutorizedReceiveAddr, EAccessDenied);
        transfer::public_receive(&mut copyrightOwner.id, sent)
    }
} 