module copyright::copyrightOwner {
    use std::string::String;

    public struct CopyrightObject has key, store {
        id: UID,
        title: String,
        description: String,
        timestamp: u64, //creation date
        url: String, //url for the copyright
    }

    //owner create copyright
    public entry fun create_copyright(title: String, description: String, timestamp: u64, url: String, ctx: &mut TxContext)
    {
        let copyrightObject = CopyrightObject {
            id: object::new(ctx),
            title,
            description,
            timestamp,
            url,
        };
        let owner = tx_context::sender(ctx); //get the sign contract owner address 
        transfer::public_transfer(copyrightObject, owner); //transfer the object to the owner
    }

    //owner remove copyright
    public entry fun remove_copyright(copyrightObject: CopyrightObject) {
        let CopyrightObject {
            id,
            title: _,
            description: _,
            timestamp: _,
            url: _,
        } = copyrightObject;
        object::delete(id);
    }
} 