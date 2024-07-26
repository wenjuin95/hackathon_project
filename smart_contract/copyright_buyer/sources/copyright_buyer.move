module copyright_buyer::buyer {
    use std::string::String;


    public struct Buyer has key, store {
        id: UID,
        owner: address,
        payment_history: u64,
        contact_email: String,
        contact_number: u64
    }

    //buyer send payment to owner
    public fun pay_to_owner(
        owner: address, 
        payment_history: u64, 
        contact_email: String, 
        contact_number: u64, 
        ctx: &mut TxContext 
        ) {
        let buyer = Buyer {
            id: object::new(ctx),
            owner,
            payment_history,
            contact_email,
            contact_number
        };
        transfer::public_transfer(buyer, owner);
    }
}
