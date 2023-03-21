import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from './firebase.config'

const auth = getAuth(firebaseApp)

export const signUpUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user
      return { user: userCredential.user, code: 200, errorMessage: '' }
    })
    .catch((error) => {
      return { user: null, code: error.code, errorMessage: error.message }
      // const errorCode = error.code
      // const errorMessage = error.message
    })
}

export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user
      return { user: userCredential.user, code: 200, errorMessage: '' }
      // ...
    })
    .catch((error) => {
      return { user: null, code: error.code, errorMessage: error.message }
      // const errorCode = error.code
      // const errorMessage = error.message
    })
}
