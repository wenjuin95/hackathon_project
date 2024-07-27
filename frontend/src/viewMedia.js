// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
//   authDomain: "vibe-v-a3ff6.firebaseapp.com",
//   projectId: "vibe-v-a3ff6",
//   storageBucket: "vibe-v-a3ff6.appspot.com",
//   messagingSenderId: "409671076054",
//   appId: "1:409671076054:web:be8ca9831d5c30ace16177",
//   measurementId: "G-WB2GL49FTK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// // Create a container for the grid
// const gridContainer = document.createElement('div');
// gridContainer.style.display = 'grid';
// gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
// gridContainer.style.paddingTop = '200px';
// gridContainer.style.width = '100%';
// gridContainer.style.height = '90vh';
// gridContainer.style.overflow = 'auto';
// document.getElementById('media').appendChild(gridContainer);

// // Function to retrieve and display all images from the 'uploads' folder
// function displayAllImages() {
//   const listRef = ref(storage, 'uploads/');

//   listAll(listRef)
//     .then((res) => {
//       console.log('Items found:', res.items.length); // Log the number of items found
//       res.items.forEach((itemRef) => {
//         console.log('Processing item:', itemRef.name); // Log each item being processed
//         getDownloadURL(itemRef)
//           .then((url) => {
//             console.log('Image URL:', url); // Log the URL of each image
//             // Create an img element and set its src to the download URL
//             const img = document.createElement('img');
//             img.src = url;
//             img.alt = itemRef.name;
//             img.style.width = '150px'; // Set the fixed width
//             img.style.height = '150px'; // Set the fixed height
//             img.style.objectFit = 'cover'; // Ensure the image covers the area without distortion

//             // Append the img element to the grid container
//             gridContainer.appendChild(img);
//           })
//           .catch((error) => {
//             console.error('Error retrieving image URL:', error);
//           });
//       });
//     })
//     .catch((error) => {
//       console.error('Error listing images:', error);
//     });
// }

// // Call the function to display all images
// displayAllImages();






//part 2
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
//   authDomain: "vibe-v-a3ff6.firebaseapp.com",
//   projectId: "vibe-v-a3ff6",
//   storageBucket: "vibe-v-a3ff6.appspot.com",
//   messagingSenderId: "409671076054",
//   appId: "1:409671076054:web:be8ca9831d5c30ace16177",
//   measurementId: "G-WB2GL49FTK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// // Create a container for the grid
// const gridContainer = document.createElement('div');
// gridContainer.style.display = 'grid';
// gridContainer.style.gridTemplateColumns = 'repeat(7, 1fr)';
// gridContainer.style.paddingTop = '200px';
// gridContainer.style.width = '100%';
// gridContainer.style.height = '80vh';
// gridContainer.style.overflow = 'auto';
// document.getElementById('media').appendChild(gridContainer);

// // Create a modal for displaying full-size images
// const modal = document.createElement('div');
// modal.style.display = 'none';
// modal.style.position = 'fixed';
// modal.style.zIndex = '1';
// modal.style.left = '0';
// modal.style.top = '0';
// modal.style.width = '100%';
// modal.style.height = '100%';
// modal.style.overflow = 'auto';
// modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
// document.body.appendChild(modal);

// // Create an image element for the modal
// const modalImg = document.createElement('img');
// modalImg.style.margin = 'auto';
// modalImg.style.display = 'block';
// modalImg.style.width = '80%';
// modalImg.style.maxWidth = '700px';
// modal.appendChild(modalImg);

// // Create a close button for the modal
// const closeModal = document.createElement('span');
// closeModal.innerHTML = '&times;';
// closeModal.style.position = 'absolute';
// closeModal.style.top = '15px';
// closeModal.style.right = '35px';
// closeModal.style.color = '#f1f1f1';
// closeModal.style.fontSize = '40px';
// closeModal.style.fontWeight = 'bold';
// closeModal.style.cursor = 'pointer';
// modal.appendChild(closeModal);

// // Append the modal to the body
// document.body.appendChild(modal);

// // Function to close the modal
// closeModal.onclick = function() {
//   modal.style.display = 'none';
// };

// // Function to close the modal when clicking outside the image
// modal.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };

// // Function to retrieve and display all images from the 'uploads' folder
// function displayAllImages() {
//   const listRef = ref(storage, 'uploads/');

//   listAll(listRef)
//     .then((res) => {
//       res.items.forEach((itemRef) => {
//         getDownloadURL(itemRef)
//           .then((url) => {
//             // Create an img element and set its src to the download URL
//             const img = document.createElement('img');
//             img.src = url;
//             img.alt = itemRef.name;
//             img.style.width = '150px'; // Set the fixed width
//             img.style.height = '150px'; // Set the fixed height
//             img.style.objectFit = 'cover'; // Ensure the image covers the area without distortion

//             // Add click event to show the full-size image in the modal
//             img.onclick = function() {
//               modal.style.display = 'block';
//               modalImg.src = url;
//             };

//             // Append the img element to the grid container
//             gridContainer.appendChild(img);
//           })
//           .catch((error) => {
//             console.error('Error retrieving image URL:', error);
//           });
//       });
//     })
//     .catch((error) => {
//       console.error('Error listing images:', error);
//     });
// }

// // Call the function to display all images
// displayAllImages();








//part 3
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
  authDomain: "vibe-v-a3ff6.firebaseapp.com",
  projectId: "vibe-v-a3ff6",
  storageBucket: "vibe-v-a3ff6.appspot.com",
  messagingSenderId: "409671076054",
  appId: "1:409671076054:web:be8ca9831d5c30ace16177",
  measurementId: "G-WB2GL49FTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Create a container for the grid
const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(8, 0fr)';
gridContainer.style.paddingTop = '200px';
gridContainer.style.width = '100%';
gridContainer.style.height = '80vh';
gridContainer.style.overflow = 'auto';
document.getElementById('media').appendChild(gridContainer);

// Get the popup elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close-btn');

// Function to close the popup
closeBtn.onclick = function() {
  popup.style.display = 'none';
};

// Function to close the popup when clicking outside the content
popup.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

// Function to retrieve and display all images from the 'uploads' folder
function displayAllImages() {
  const listRef = ref(storage, 'uploads/');

  listAll(listRef)
    .then((res) => {
      console.log('List of items retrieved:', res.items);
      const promises = res.items.map((itemRef) => {
        return getMetadata(itemRef).then((metadata) => {
          return { itemRef, metadata };
        });
      });

      Promise.all(promises)
        .then((itemsWithMetadata) => {
          console.log('Items with metadata:', itemsWithMetadata);
          itemsWithMetadata.sort((a, b) => new Date(a.metadata.timeCreated) - new Date(b.metadata.timeCreated));

          itemsWithMetadata.forEach(({ itemRef }) => {
            getDownloadURL(itemRef)
              .then((url) => {
                console.log('Download URL:', url);
                // Create an img element and set its src to the download URL
                const img = document.createElement('img');
                img.src = url;
                img.alt = itemRef.name;
                img.style.width = '150px'; // Set the fixed width
                img.style.height = '150px'; // Set the fixed height
                img.style.objectFit = 'cover'; // Ensure the image covers the area without distortion

                // Add click event to show the full-size image in the popup
                img.onclick = function() {
                  popup.style.display = 'block';
                  popupImg.src = url;
                };

                // Append the img element to the grid container
                gridContainer.appendChild(img);
              })
              .catch((error) => {
                console.error('Error retrieving image URL:', error);
              });
          });
        })
        .catch((error) => {
          console.error('Error retrieving metadata:', error);
        });
    })
    .catch((error) => {
      console.error('Error listing images:', error);
    });
}

// Call the function to display all images
displayAllImages();