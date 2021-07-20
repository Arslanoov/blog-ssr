interface RegisterFormInterface {
  email: string
  password: string
  confirmPassword: string
  error: string | null
}

interface AuthFormInterface {
  email: string
  password: string
  error: string | null
}

const CLEAR_REGISTER_FORM = (): RegisterFormInterface => ({
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
})

const CLEAR_AUTH_FORM = (): AuthFormInterface => ({
  email: "",
  password: "",
  error: null,
})

export { RegisterFormInterface, AuthFormInterface, CLEAR_REGISTER_FORM, CLEAR_AUTH_FORM }
