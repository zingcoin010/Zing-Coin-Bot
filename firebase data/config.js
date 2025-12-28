// firebase data/config.js

const firebaseConfig = {
    apiKey: "AIzaSyA5A8qm5QIvqVaGbuz8j8w-ZJ3W0p96qpQ",
    databaseURL: "https://zing-coin-default-rtdb.firebaseio.com",
    projectId: "zing-coin"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

const tg = window.Telegram.WebApp;

// මේක function එකක් විදියට ගමු එතකොට හැම වෙලේම අලුත් දත්ත ලැබෙනවා
function getLocalUser() {
    return JSON.parse(localStorage.getItem('zingUser'));
}
