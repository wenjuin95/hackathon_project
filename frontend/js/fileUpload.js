import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { useState, useEffect } from 'react'
import { 
  ConnectButton,
  // ConnectModal, 
  createNetworkConfig, 
  // SuiClientProvider, 
  // WalletProvider 
} from '@mysten/dapp-kit';
import { useCurrentAccount } from '@mysten/dapp-kit';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import '@mysten/dapp-kit/dist/index.css';

const firebaseConfig = {
  apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
  authDomain: "vibe-v-a3ff6.firebaseapp.com",
  projectId: "vibe-v-a3ff6",
  storageBucket: "vibe-v-a3ff6.appspot.com",
  messagingSenderId: "409671076054",
  appId: "1:409671076054:web:be8ca9831d5c30ace16177",
  measurementId: "G-WB2GL49FTK"
};

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
})
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


// Select file input and progress bar elements
const fileInput = document.getElementById('upload-button');
const progressBar = document.querySelector('.progress');
const uploadPercentage = document.querySelector('.uploadPercentage');
await showHideUpload();

// Listen for file selection
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  uploadFile(file);
  console.log("File selected:", file.name); // Debug 
});

async function ObtainBalance() {
  const account = useCurrentAccount();
  const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });
  const balance = await suiClient.getBalance({ owner: account.address });

  return (
    balance
  );
}

function uploadFile(file) {
  const storageRef = ref(storage, 'uploads/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed', 
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressBar.style.width = progress + '%';
      uploadPercentage.textContent = Math.floor(progress) + '%';
      console.log(`Upload is ${progress}% done`); // Debug log
    }, 
    (error) => {
      // Handle unsuccessful uploads
      console.error('Upload failed:', error);
    }, 
    () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        uploadedImage.src = downloadURL; // Set the src attribute of the img element
        uploadedImage.style.display = 'block'; // Make the image visible
        console.log('Image src set to:', uploadedImage.src); // Debug log
      }).catch((error) => {
        console.error('Failed to get download URL:', error);
      });
    }
  );
}

// Event listener for the button click
document.getElementById('upload-button').addEventListener('click', () => {
  fileInput.click(); // Trigger file input dialog
  console.log("File input dialog triggered"); // Debug log
});

async function showHideUpload() {
  const serviceCharge = 0;
  var balance = await ObtainBalance();

  if (balance >= serviceCharge) {
    uploadButton.hidden = false;
  }
  else {
    console.log("hahahahaha");
  }
}