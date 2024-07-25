module copyright::config {

    //Admin able to manage the contract
    public struct Admin has key, store {
        id: UID,
    }

    fun init(ctx: &mut TxContext) {
        let admin = Admin {
            id: object::new(ctx)
        };
        transfer::public_transfer(admin, tx_context::sender(ctx));
    }
}