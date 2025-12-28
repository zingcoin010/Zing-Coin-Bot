// firebase data/config.js

const firebaseConfig = {
    apiKey: "AIzaSyA5A8qm5QIvqVaGbuz8j8w-ZJ3W0p96qpQ",
    databaseURL: "https://zing-coin-default-rtdb.firebaseio.com",
    projectId: "zing-coin"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

// පොදුවේ හැම පේජ් එකකම පාවිච්චි කරන්න පුළුවන් දත්ත
const tg = window.Telegram.WebApp;
const localUser = JSON.parse(localStorage.getItem('zingUser'));

// යූසර් ලොග් වෙලා නැත්නම් index එකට යැවීමේ ආරක්ෂිත ක්‍රමයක්
function checkAuth() {
    if (!localUser && !window.location.href.includes('index.html')) {
        window.location.href = '../index.html';
    }
}
