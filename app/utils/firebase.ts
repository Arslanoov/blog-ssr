import firebase from "firebase"
import { NuxtFireInstance } from "@nuxtjs/firebase"

let $fire: NuxtFireInstance

const initializeFirebase = (firebaseInstance: NuxtFireInstance): void => {
  $fire = firebaseInstance
}

// Wrappers
const auth = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  return $fire.auth.createUserWithEmailAndPassword(email, password)
}

export { auth, initializeFirebase, $fire }
