import firebase from "firebase/app";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBqd8XR29cxzz35o_cdMUU6FWVcEGUkcHU",
  authDomain: "ecommerce-80489.firebaseapp.com",
  projectId: "ecommerce-80489",
  storageBucket: "ecommerce-80489.appspot.com",
  messagingSenderId: "744714046230",
  appId: "1:744714046230:web:1981c959122c3ab0835e37",
  measurementId: "G-JCQGD75XM8",
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
