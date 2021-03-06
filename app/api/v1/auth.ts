import {
  signUp as signUpRequest,
  auth as authRequest,
  authWithGoogle as authWithGoogleRequest,
  authWithFacebook as authWithFacebookRequest,
  authWithGithub as authWithGithubRequest,
  authWithMicrosoft as authWithMicrosoftRequest,
  getCurrentUser as currentUser,
} from "~/utils/firebase"
import { apiRequest } from "~/api/v1/index"
import { UserCredential, User } from "~/interfaces/auth/user"

const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return apiRequest<UserCredential>(signUpRequest, [email, password])
}

const auth = async (email: string, password: string): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authRequest, [email, password])
}

const authGoogle = async (): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authWithGoogleRequest, [])
}

const authFacebook = async (): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authWithFacebookRequest, [])
}

const authGithub = async (): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authWithGithubRequest, [])
}

const authMicrosoft = async (): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authWithMicrosoftRequest, [])
}

const getCurrentUser = (): User | null => {
  return currentUser()
}

export { signUp, auth, authGoogle, authFacebook, authGithub, authMicrosoft, getCurrentUser }
