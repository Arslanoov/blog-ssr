import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

import { RegisterFormInterface, CLEAR_REGISTER_FORM } from "~/interfaces/forms/register"
import { UserCredential } from "~/interfaces/auth/user"
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
  async signUp(): Promise<UserCredential | undefined> {
    try {
      const response = await signUpRequest(this.registerForm.email, this.registerForm.password)
      console.log("Received response in action", response)
      return response
    } catch (error) {
      console.log("Received error in action", error)
    }
  }
}
