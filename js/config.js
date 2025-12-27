// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5A8qm5QIvqVaGbuz8j8w-ZJ3W0p96qpQ",
    databaseURL: "https://zing-coin-default-rtdb.firebaseio.com",
    projectId: "zing-coin",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// පොදු User දත්ත ලබාගැනීම
const user = JSON.parse(localStorage.getItem('zingUser'));
const tg = window.Telegram.WebApp;
