module copyright::copyrightOwner {

    public struct Admin has key, store {
        id: UID,
    }


    public entry fun create(ctx: &mut TxContext)
    {
        let object = Admin {
            id: object::new(ctx),
        };
        transfer::public_transfer(object, ctx.sender());
    }
} 