`use strict`

module.exports = class AsciiSword {

  constructor (opts) {

    if (opts && typeof opts.logger === `function`) {

      this.logger = opts.logger
    } else {

      this.logger = console.log
    }

    this.hilt = opts && opts.hilt ? opts.hilt : 3
    this.blade = opts && opts.blade ? opts.blade : 18
  }

  generatePart (part, length) {

    return [...Array(length)].map(() => part).join(``)
  }

  generateSword () {

    return `o${this.generatePart(`=`, this.hilt)}{{${this.generatePart(`:`, this.blade)}>`
  }

  log (message, ...meta) {

    this.logger(message ? `${this.generateSword()} ${message}` : this.generateSword(), ...meta)
  }
}