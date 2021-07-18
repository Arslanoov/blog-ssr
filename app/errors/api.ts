import ValidationError from "~/errors/validation"

export default class ApiError extends ValidationError {
  constructor(message: string) {
    super(message)
    this.name = "ApiError"
  }
}
