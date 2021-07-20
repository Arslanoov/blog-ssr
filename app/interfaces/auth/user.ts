import firebase from "firebase"

type UserCredential = firebase.auth.UserCredential
type User = firebase.User
type AuthState = {
  authUser: firebase.User
}

export { UserCredential, User, AuthState }
