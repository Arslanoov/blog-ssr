import { isDev } from "~/tools/build/env"

// Success

const apiSuccess = <T>(response: T): T => {
  isDev() && console.log("[API Success]:", response)

  return response
}

// Error

type FirebaseError = {
  message: string | undefined
}

type FormattedError = {
  message: string | undefined
}

const formatFirebaseErrorMessage = (error: FirebaseError): FormattedError => ({
  message: error.message,
})

const apiError = (error: FirebaseError): FormattedError => {
  isDev() && console.error("[API Error]:", error.message)

  return formatFirebaseErrorMessage(error)
}

export { FirebaseError, apiSuccess, apiError, formatFirebaseErrorMessage }
