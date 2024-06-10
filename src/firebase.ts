// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtf3a4ZkMKxxVlgUtle4ecEnM82F2NmRA',
  authDomain: 'furniture-shop-web-app.firebaseapp.com',
  projectId: 'furniture-shop-web-app',
  storageBucket: 'furniture-shop-web-app.appspot.com',
  messagingSenderId: '15371118895',
  appId: '1:15371118895:web:9151516e2c41db8e06d9da',
  measurementId: 'G-MVXJTC4R2Y'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db
