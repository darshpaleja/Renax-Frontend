import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyARfU2MsxhME953P7iw28vEg0TjdombBMk",
  authDomain: "renax-fef0b.firebaseapp.com",
  projectId: "renax-fef0b",
  storageBucket: "renax-fef0b.appspot.com",
  messagingSenderId: "512259769667",
  appId: "1:512259769667:web:9e0124173d9f46820fdbf6",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Register Service Worker
navigator.serviceWorker
  .register("/firebase-messaging-sw.js")
  .then((registration) => {
    console.log("Service Worker Registered:", registration);
  })
  .catch((err) => console.log("Service Worker Registration Failed:", err));

// Request FCM Token
const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        "BLFM3duM_GQjWcdbl4TV51ePmUjzRHBGbdNA5cfjkaeN3zslGg9LCHhQKqwxLy6441pbaRcgFLBOPWj9Ml0hOpc",
    });

    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available.");
      return null;
    }
  } catch (error) {
    console.error("Error getting token: ", error);
    return null;
  }
};

// Listen for Foreground Messages
const onMessageListener = () =>
  new Promise((resolve, reject) => {
    try {
      onMessage(messaging, (payload) => {
        console.log("Foreground Notification Received:", payload);
        resolve(payload);
      });
    } catch (error) {
      reject(error);
    }
  });

export { requestForToken, onMessageListener, messaging };
