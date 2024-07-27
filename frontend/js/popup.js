window.onload = function() {
    // Get the popup
    var popup = document.getElementById("popup");

    // Show the popup
    popup.style.display = "block";

    // Get the <span> element that closes the popup
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

}