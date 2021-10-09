import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed';

const config = 
{
  apiKey: "AIzaSyAdCNhSfCbUCzM5SpkIcGwpdlailliI2EM",
  authDomain: "netflix-clone-dfbc9.firebaseapp.com",
  projectId: "netflix-clone-dfbc9",
  storageBucket: "netflix-clone-dfbc9.appspot.com",
  messagingSenderId: "422677327059",
  appId: "1:422677327059:web:1b862aca5e47388091b826",
  measurementId: "G-G6YF09G76S"
};


const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);


