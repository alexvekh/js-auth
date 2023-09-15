import { Form } from '../../script/form'

class SighupForm extends Form {
  static value = {}

  static validate = (name, value) => {
    return true
  }

  static submit = () => {
    console.log(this.value)
  }

  static change = (name, value) => {
    console.log(name, value)
    if (this.validate(name, value)) this.value[name] = value
  }
}

window.signupForm = SighupForm

// other way: (id="")
// document.addEventListener("DOMContentLoaded", () => {})
