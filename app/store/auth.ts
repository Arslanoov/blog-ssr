import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

import { RegisterFormInterface, CLEAR_REGISTER_FORM } from "~/interfaces/forms/register"
import { signUp as signUpRequest } from "~/api/v1/auth"

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

  @Action({ rawError: true })
  signUp(): void {
    signUpRequest(this.registerForm.email, this.registerForm.password)
      .then((response) => {
        console.log("RESPONSE", response)
      })
      .catch(() => ({}))
  }
}
