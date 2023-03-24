import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from './firebase.config'

interface IFirebaseUser {
  user: FirebaseUser | null
  code: number
  message: string
}
const defaultErrorValue = (code: number, message: string): IFirebaseUser => {
  return { user: null, code: 400, message }
}

export const signUp = (
  email: string,
  password: string,
  name: string,
  phoneNumber: string,
): IFirebaseUser => {
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(userCredential.user, {
          displayName: name,
        })

        await addDoc(collection(db, 'users'), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          name,
          phoneNumber,
        }).then((res) => {
          return { user: userCredential.user, code: 200, message: 'User created successfully' }
        })
      })
      .catch((error) => {
        return defaultErrorValue(error.code, error.message)
      })
  } catch (error) {
    let message = 'Unknown Error: On creates extra records for user.'
    if (error instanceof Error) message = error.message
    return defaultErrorValue(400, message)
  }
  return defaultErrorValue(400, 'Unknown error: On creating user auth and collection.')
}

export const login = (email: string, password: string): IFirebaseUser => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return { user: userCredential.user, code: 200, message: 'Logged in successfully' }
    })
    .catch((error) => {
      return defaultErrorValue(error.code, error.message)
    })
  return defaultErrorValue(400, 'Unknown error: On login')
}

export const logout = (): IFirebaseUser => {
  signOut(auth)
    .then(() => {
      return { user: null, code: 200, message: 'Logged out successfully' }
    })
    .catch((error) => {
      return defaultErrorValue(error.code, error.message)
    })
  return defaultErrorValue(400, 'Unknown error: On logout')
}
