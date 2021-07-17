import firebase from "firebase"

import { $fire } from "~/utils/firebase"
import { apiError, apiSuccess } from "~/api/v1/index"

export const signUp = (email: string, password: string): Promise<firebase.auth.UserCredential> =>
  new Promise((resolve, reject) => {
    $fire.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => resolve(apiSuccess(response)))
      .catch((error) => reject(apiError(error)))
  })
