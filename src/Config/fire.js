import * as firebase from 'firebase';

var Config={
    apiKey: "AIzaSyD2MiN_oXoMZ-K97i5KWxNdWdigX5vEvyY",
    authDomain: "project-7860.firebaseapp.com",
    databaseURL: "https://project-7860.firebaseio.com",
    projectId: "project-7860",
    storageBucket: "project-7860.appspot.com",
    messagingSenderId: "724369761817",
    appId: "1:724369761817:web:bdec6938e009c27b636c88",
    measurementId: "G-1FV10X89GJ"
};

var fire = firebase.initializeApp(Config);

export default fire;