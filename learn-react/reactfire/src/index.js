import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

firebase.initializeApp({
  apiKey: "AIzaSyBmHFYWTnVMkm80zLNTnQ9SAbRVzxNrdNg",
  authDomain: "contact-manager-b77cd.firebaseapp.com",
  databaseURL: "https://contact-manager-b77cd.firebaseio.com/",
  storageBucket: "contact-manager-b77cd.appspot.com",
});

ReactDOM.render(
  <App firebase={firebase} />,
  document.getElementById('root')
);
