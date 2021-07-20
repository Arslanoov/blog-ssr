import firebase from "firebase"
import { NuxtFireInstance } from "@nuxtjs/firebase"

let $fire: NuxtFireInstance

const initializeFirebase = (firebaseInstance: NuxtFireInstance): void => {
  $fire = firebaseInstance
}

// Wrappers
const signUp = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  return $fire.auth.createUserWithEmailAndPassword(email, password)
}

const auth = (email: string, password: string, rememberMe: boolean): Promise<firebase.auth.UserCredential> => {
  const response = $fire.auth.signInWithEmailAndPassword(email, password)
  if (rememberMe) {
    $fire.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  }
  return response
}

const getCurrentUser = (): firebase.User | null => {
  return $fire.auth.currentUser
}

export { signUp, auth, getCurrentUser, initializeFirebase, $fire }
