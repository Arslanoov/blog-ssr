export interface RegisterFormInterface {
  email: string
  password: string
}

export const CLEAR_REGISTER_FORM = (): RegisterFormInterface => ({
  email: "",
  password: "",
})
