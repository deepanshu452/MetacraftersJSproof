// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT
function mintNFT(id, title, artist, creationDate, price) {
    // Create NFT object with metadata
    let newNFT = {
        id: id,
        title: title,
        artist: artist,
        creationDate: creationDate,
        price: price,
    };
    // Store NFT in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs
function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("ID: " + nft.id);
        console.log("Title: " + nft.title);
        console.log("Artist: " + nft.artist);
        console.log("Creation Date: " + nft.creationDate);
        console.log("Price: " + nft.price);
        console.log("-----------------------");
    }
}

// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some NFTs
mintNFT(1, "Sunset Bliss", "Alice Smith", "2023-03-12", "3.5 ETH");
mintNFT(2, "Futuristic Cityscape", "Bob Jones", "2023-05-20", "2.1 ETH");
mintNFT(3, "Abstract Waves", "Cathy Lee", "2022-11-10", "1.8 ETH");
mintNFT(4, "Virtual Garden", "Daniel Kim", "2021-08-15", "4.0 ETH");

// List NFTs
console.log("Listing NFTs:");
console.log("-----------------------");
listNFTs();

// Print total supply
console.log("Total NFTs minted: " + getTotalSupply());
