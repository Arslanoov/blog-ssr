import { extend } from "vee-validate"
import { required, email, min, max, confirmed } from "vee-validate/dist/rules"

extend("required", {
  ...required,
  message: "The {_field_} is required",
})

extend("email", {
  ...email,
  message: "The field must be an email",
})

extend("min", {
  ...min,
  message: "The {_field_} must contain at least {length} chars",
})

extend("max", {
  ...max,
  message: "The {_field_} must contain up to {length} chars",
})

extend("confirmed", {
  ...confirmed,
  message: "The {_field_} must be confirmed",
})
