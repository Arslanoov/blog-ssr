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
  authGithub as authGithubRequest,
  authMicrosoft as authMicrosoftRequest,
} from "~/api/v1/auth"
import ValidationError from "~/errors/validation"

@Module({
  name: process.env.NODE_ENV === "test" ? "auth" : undefined,
  namespaced: true,
})
export default class Auth extends VuexModule {
  public authForm: AuthFormInterface = CLEAR_AUTH_FORM()
  public registerForm: RegisterFormInterface = CLEAR_REGISTER_FORM()
  public user: User | null = null

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
  public clearRegisterFormError(): void {
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
  public setAuthFormError(error: string): void {
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
  public async signUp(): Promise<UserCredential> {
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
      const user = await authRequest(this.authForm.email, this.authForm.password)
      this.context.commit("clearAuthForm")

      return user
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
      this.context.commit("clearAuthFormError")
      const user = await authGoogleRequest()
      this.context.commit("clearAuthForm")

      return user
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
      this.context.commit("clearAuthFormError")
      const user = await authFacebookRequest()
      this.context.commit("clearAuthForm")

      return user
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setAuthFormError", error.getMessage())
      }
      throw error
    }
  }

  @Action({ rawError: true })
  public async loginGithub(): Promise<UserCredential> {
    try {
      this.context.commit("clearAuthFormError")
      const user = await authGithubRequest()
      this.context.commit("clearAuthForm")

      return user
    } catch (error) {
      if (error instanceof ValidationError) {
        this.context.commit("setAuthFormError", error.getMessage())
      }
      throw error
    }
  }

  @Action({ rawError: true })
  public async loginMicrosoft(): Promise<UserCredential> {
    try {
      this.context.commit("clearAuthFormError")
      const user = await authMicrosoftRequest()
      this.context.commit("clearAuthForm")

      return user
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
