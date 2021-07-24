import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

import {
  RegisterFormInterface,
  AuthFormInterface,
  CLEAR_REGISTER_FORM,
  CLEAR_AUTH_FORM,
} from "~/interfaces/forms/register"
import { AuthState, User, UserCredential } from "~/interfaces/auth/user"
import {
  getCurrentUser,
  signUp as signUpRequest,
  auth as authRequest,
  authGoogle as authGoogleRequest,
  authFacebook as authFacebookRequest,
} from "~/api/v1/auth"
import ValidationError from "~/errors/validation"

@Module({
  name: process.env.NODE_ENV === "test" ? "auth" : undefined,
  namespaced: true,
  stateFactory: true,
})
export default class Auth extends VuexModule {
  private authForm: AuthFormInterface = CLEAR_AUTH_FORM()
  private registerForm: RegisterFormInterface = CLEAR_REGISTER_FORM()
  private user: User | null = null

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

  @Mutation
  public changeAuthFormEmail(email: string): void {
    this.authForm.email = email
  }

  @Mutation
  public changeAuthFormPassword(password: string): void {
    this.authForm.password = password
  }

  @Mutation
  public setAuthFormEmailError(error: string): void {
    this.authForm.error = error
  }

  @Mutation
  public clearAuthFormError(): void {
    this.authForm.error = null
  }

  @Mutation
  public clearAuthForm(): void {
    this.authForm = CLEAR_AUTH_FORM()
  }

  @Mutation
  public setUser(user: User): void {
    this.user = user
  }

  @Action({ rawError: true })
  public onAuthStateChanged(authState: AuthState): void {
    this.context.commit("setUser", JSON.parse(JSON.stringify(authState.authUser)))
  }

  @Action({ rawError: true })
  public async signUp(): Promise<UserCredential | undefined> {
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

  @Action({ rawError: true })
  public async login(): Promise<UserCredential> {
    try {
      this.context.commit("clearAuthFormError")

      // const user = getCurrentUser()
      return await authRequest(this.authForm.email, this.authForm.password)
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setAuthFormError", error.getMessage())
      }
      throw error
    }
  }

  @Action({ rawError: true })
  public async loginGoogle(): Promise<UserCredential> {
    try {
      return await authGoogleRequest()
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setAuthFormError", error.getMessage())
      }
      throw error
    }
  }

  @Action({ rawError: true })
  public async loginFacebook(): Promise<UserCredential> {
    try {
      return await authFacebookRequest()
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setAuthFormError", error.getMessage())
      }
      throw error
    }
  }

  public get isAuth(): boolean {
    return Boolean(this.user)
  }
}
