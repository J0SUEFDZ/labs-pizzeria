import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../Auth/firebase.config'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const [user, setUser] = useState<FirebaseUser | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export default AuthProvider
