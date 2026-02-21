const firebaseConfig = {
  apiKey: "AIzaSyB4nfefo7316zOo19zNYLkfk7z6-5fUfXs",
  authDomain: "tap-speed-game.firebaseapp.com",
  projectId: "tap-speed-game",
  storageBucket: "tap-speed-game.firebasestorage.app",
  messagingSenderId: "490267026105",
  appId: "1:490267026105:web:582b9290f31602d8f4b168",
  measurementId: "G-6M7RFXDEZ0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();