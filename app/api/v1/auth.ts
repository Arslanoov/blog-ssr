import { auth } from "~/utils/firebase"
import { apiRequest } from "~/api/v1/index"
import { UserCredential } from "~/interfaces/auth/user"

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return apiRequest<UserCredential>(auth, [email, password])
}
