import { getStorage, ref, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
  authDomain: "vibe-v-a3ff6.firebaseapp.com",
  projectId: "vibe-v-a3ff6",
  storageBucket: "vibe-v-a3ff6.appspot.com",
  messagingSenderId: "409671076054",
  appId: "1:409671076054:web:be8ca9831d5c30ace16177",
  measurementId: "G-WB2GL49FTK"
};

/* All this are hardcoded */
var    url = "https://firebasestorage.googleapis.com/v0/b/vibe-v-a3ff6.appspot.com/o/uploads%2F21.png?alt=media&token=7edfe39b-19f9-40fc-b32f-b764ac1ca8df";
console.log('File available at', url);
image.src = url; // Set the src attribute of the img element
image.style.display = 'block'; // Make the image visible
console.log('Image src set to:', uploadedImage.url); // Debug log