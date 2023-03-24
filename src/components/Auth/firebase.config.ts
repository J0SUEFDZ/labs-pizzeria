// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_ukPqG_ElMJsXM3ofOalKxjHZ_QPAG4w',
  authDomain: 'pizzeria-7a987.firebaseapp.com',
  databaseURL: 'https://pizzeria-7a987-default-rtdb.firebaseio.com',
  projectId: 'pizzeria-7a987',
  storageBucket: 'pizzeria-7a987.appspot.com',
  messagingSenderId: '1030378275556',
  appId: '1:1030378275556:web:08743a0d5dc3d723a6a2f1',
  measurementId: 'G-6BZ5TYBN8H',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
// export const analytics = getAnalytics(app)
