module copyright::copyrightOwner {

    use copyright::config::Admin;
    use std::string::String;


    public struct CopyrightOwner has key, store {
        id: UID,
        owner: address,
        name: String,
        description: String,
        price: u64,
    } 

    //admin help owner to create copyright
    public fun create_copyright( _: &Admin, owner: address, name: String, description: String, price: u64, ctx: &mut TxContext ) {
        let copyrightOwner = CopyrightOwner {
            id: object::new(ctx),
            owner,
            name,
            description,
            price,
        };
        transfer::transfer(copyrightOwner, owner);
    }

    //admin help owner to remove copyright
    public fun remove_copyright( _: &Admin, copyrightOwner: CopyrightOwner) {
        let CopyrightOwner {
            id,
            owner: _,
            name: _,
            description: _,
            price: _,
        } = copyrightOwner;
        object::delete(id);
    }
} 