// window.onload = function() {
//     // Get the popup
//     var popup = document.getElementById("popup");

//     // Show the popup
//     popup.style.display = "block";

//     // Get the <span> element that closes the popup
//     var closeBtn = document.getElementsByClassName("close-btn")[0];

//     // When the user clicks on <span> (x), close the popup
//     closeBtn.onclick = function() {
//         popup.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the popup, close it
//     window.onclick = function(event) {
//         if (event.target == popup) {
//             popup.style.display = "none";
//         }
//     }

// }

window.onload = function() {
    // Get the popup
    var popup = document.getElementById("popup");

    // Show the popup
    popup.style.display = "block";

    // Get the <span> element that closes the popup
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    // Get the "Connect Wallet" button
    var connectWalletBtn = document.getElementById("wallet");

    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = closePopup;

    // When the user clicks the "Connect Wallet" button, close the popup
    connectWalletBtn.onclick = closePopup;

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            closePopup();
        }
    }
}