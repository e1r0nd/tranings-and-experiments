import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmnlg2_OzfkLa2_PbFcU-o81ozEfiE3ig",
    authDomain: "catch-of-the-day-5fa66.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-5fa66.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;