export interface RegisterFormInterface {
  email: string
  password: string
  confirmPassword: string
  error: string | null
}

export const CLEAR_REGISTER_FORM = (): RegisterFormInterface => ({
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
})
