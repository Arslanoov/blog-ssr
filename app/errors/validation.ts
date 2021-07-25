export default class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }

  public getMessage(): string {
    return this.message.split(":")[1].trim()
  }
}
