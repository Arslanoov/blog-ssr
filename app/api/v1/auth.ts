import { signUp as signUpRequest, auth as authRequest, getCurrentUser as currentUser } from "~/utils/firebase"
import { apiRequest } from "~/api/v1/index"
import { UserCredential, User } from "~/interfaces/auth/user"

const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return apiRequest<UserCredential>(signUpRequest, [email, password])
}

const auth = async (email: string, password: string): Promise<UserCredential> => {
  return apiRequest<UserCredential>(authRequest, [email, password])
}

const getCurrentUser = (): User | null => {
  return currentUser()
}

export { signUp, auth, getCurrentUser }
