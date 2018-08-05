import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyA1FShqhXOXsy6j9gc9MaF77TxxrIeHksw',
  authDomain: 'react-auth-a459f.firebaseapp.com',
  databaseURL: 'https://react-auth-a459f.firebaseio.com',
  projectId: 'react-auth-a459f',
  storageBucket: 'react-auth-a459f.appspot.com',
  messagingSenderId: '439820014483'
}

firebase.initializeApp(config)

const auth = firebase.auth()

export {auth}
