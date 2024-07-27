import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

async function fetchAndDisplayImages() {
  const querySnapshot = await getDocs(collection(db, 'images'));
  const imageCardsContainer = document.getElementById('image-cards-container');
  imageCardsContainer.innerHTML = ''; // Clear existing cards

  querySnapshot.forEach((doc) => {
    const imageUrl = doc.data().url;
    const card = document.createElement('div');
    card.classList.add('image-card');
    card.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
    imageCardsContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);
