import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

import { RegisterFormInterface, CLEAR_REGISTER_FORM } from "~/interfaces/forms/register"
import { UserCredential } from "~/interfaces/auth/user"
import { getCurrentUser, signUp as signUpRequest } from "~/api/v1/auth"
import ValidationError from "~/errors/validation"

@Module({
  name: process.env.NODE_ENV === "test" ? "auth" : undefined,
  namespaced: true,
  stateFactory: true,
})
export default class Auth extends VuexModule {
  private registerForm: RegisterFormInterface = CLEAR_REGISTER_FORM()

  @Mutation
  public changeRegisterFormEmail(email: string): void {
    this.registerForm.email = email
  }

  @Mutation
  public changeRegisterFormPassword(password: string): void {
    this.registerForm.password = password
  }

  @Mutation
  public changeRegisterFormConfirmPassword(password: string): void {
    this.registerForm.confirmPassword = password
  }

  @Mutation
  public setRegisterFormError(error: string): void {
    this.registerForm.error = error
  }

  @Mutation
  public clearRegisterForm(): void {
    this.registerForm = CLEAR_REGISTER_FORM()
  }

  @Mutation
  public clearRegisterError(): void {
    this.registerForm.error = null
  }

  @Action({ rawError: true })
  async signUp(): Promise<UserCredential | undefined> {
    try {
      this.context.commit("clearRegisterFormError")
      const response = await signUpRequest(this.registerForm.email, this.registerForm.password)
      const user = getCurrentUser()
      this.context.commit("clearRegisterForm")
      user?.sendEmailVerification()
      return response
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setRegisterFormError", error.getMessage())
      }
      throw error
    }
  }
}
