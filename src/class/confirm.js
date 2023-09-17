class Confirm {
  static #list = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }

  static generateCode = () => {
    console.log('start generate')
    return Math.floor(Math.random() * 9000) + 1000
  }

  static create = (data) => {
    this.#list.push(new Confirm(data))
    console.log(this.#list)

    setTimeout(() => {
      this.delete(code)
    }, 24 * 60 * 60 * 1000) // 24 h
  }

  static delete = (code) => {
    const length = this.#list
    this.#list = this.#list.filter((el) => el.code !== code)
    return length > this.#list.length
  }

  static getData = (code) => {
    const obj = this.#list.find((el) => el.code === code)

    return obj ? obj.data : null
  }
}

module.exports = {
  Confirm,
}
