/// Module: copyright
    // use std::string;

    // //struct for copyright
    // public struct Copyright has key, store {
    //     id: UID, //id for key
    //     owner: address, //owner of the work
    //     author: string::String, //name of author
    //     description: string::String, //description of the work
    // }

    // //function to create a copyright object
    // public fun create_copyright(ctx: &mut TxContext, author: string::String, description: string::String)
    // {
    //     let copyright = Copyright {
    //         id: object::new(ctx),
    //         owner: tx_context::sender(ctx),
    //         author: author,
    //         description: description,
    //     };
    //     transfer::share_object(copyright);
    // }

    // #[test]
    // fun test_create_copyright() {
        
    //     let dummy = &mut tx_context::dummy();
    //     create_copyright(dummy, b"John".to_string(), b"A book".to_string());
    // }

module copyright::copyright {
    use sui::url::{Self, Url};
    use std::string;
    use sui::event;
    // use sui::object::{Self, ID, UID};
    // use sui::transfer;
    // use sui::txcontext::{Self, TxContext};

    //example of NFT that can be minted by anyone
    public struct ExampleNFT has key, store {
        id: UID,
        name: string::String, //name of the NFT
        description: string::String, //description of the NFT
        url: Url, //url of the NFT
    }

    // ===== Events =====
    // Event for minting NFT
    public struct Minted has copy, drop {
        object_id: ID, // object id of the minted NFT
        owner: address, // owner of the minted NFT
        name: string::String, // name of the minted NFT
    }

    // ===== Public view function =====
    ///get the NFT name
    public fun get_name(nft: &ExampleNFT): &string::String {
        &nft.name
    }

    ///get the NFT description
    public fun get_description(nft: &ExampleNFT): &string::String {
        &nft.description
    }

    ///get the NFT url
    public fun get_url(nft: &ExampleNFT): &Url {
        &nft.url
    }

    // ===== Entry functions =====
    public entry fun mint_to_sender(
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let nft = ExampleNFT {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url)
        };
        
        event::emit(Minted {
            object_id: object::id(&nft),
            owner: sender,
            name: nft.name,
        });

        transfer::public_transfer(nft, sender);
    }
    
    ///transfer NFT to another address
    public entry fun transfer(
        nft: ExampleNFT, receipient: address, _: &mut TxContext
    ) {
        transfer::public_transfer(nft, receipient);
    }

    ///update the desciption of the NFT to a new one
    public entry fun update_description(
        nft: &mut ExampleNFT, new_description: vector<u8>, _: &mut TxContext
    ) {
        nft.description = string::utf8(new_description);
    }

    ///permanently delete the NFT
    public entry fun delete_nft(nft: ExampleNFT, _: &mut TxContext) {
        let ExampleNFT { id, name: _, description: _, url: _ } = nft;
        object::delete(id);
    }
}
