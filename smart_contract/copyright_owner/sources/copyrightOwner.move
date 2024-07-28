module copyright::copyrightOwner {
    use std::string::String;

    public struct OwnerPhoto has key, store {
        id: UID,
        imgUrl: String,
    }


    public entry fun create( imgUrl: String ,ctx: &mut TxContext)
    {
        let object = OwnerPhoto {
            id: object::new(ctx),
            imgUrl,
        };
        transfer::public_transfer(object, ctx.sender());
    }
} 