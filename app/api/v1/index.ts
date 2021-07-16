import { isDev } from "~/tools/build/env"

// Success

export const apiSuccess = <T>(response: T) => {
  isDev() && console.log("[API Success]:", response)

  return response
}

// Error

export type FirebaseError = {
  message: string | undefined
}

export const formatFirebaseErrorMessage = (error: FirebaseError) => ({
  message: error.message,
})

export const apiError = (error: FirebaseError) => {
  isDev() && console.error("[API Error]:", error.message)

  return formatFirebaseErrorMessage(error)
}
