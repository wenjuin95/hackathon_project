module copyright::copyrightOwner {
    use std::string::String;
    use sui::coin::{Coin};
    use sui::sui::SUI;

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
        payment: Coin<SUI>,
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

        //transfer payment to owner
        transfer::public_transfer(payment, owner);


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
} 