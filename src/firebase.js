import firebase from 'firebase';

// See: https://css-tricks.com/intro-firebase-react/

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC6UoE5TzbHzs-CV867tOCXOiF1d6eg58E",
  authDomain: "sterling-vix-char-sheets.firebaseapp.com",
  databaseURL: "https://sterling-vix-char-sheets.firebaseio.com",
  projectId: "sterling-vix-char-sheets",
  storageBucket: "",
  messagingSenderId: "556363376751"
};
firebase.initializeApp(config);

export default firebase;
