`use strict`

const chai = require(`chai`)
chai.should()
chai.use(require(`sinon-chai`))
const sinon = require(`sinon`)
const AsciiSword = require(`../src/ascii-sword`)

describe(`ascii-sword`, () => {

  const consoleLogSpy = sinon.spy(console, `log`)
  const customLogSpy = sinon.spy()

  beforeEach(() => {

    consoleLogSpy.resetHistory()
    customLogSpy.resetHistory()
  })

  it(`should default to logging to console.log`, () => {

    const sword = new AsciiSword()

    sword.log()

    consoleLogSpy.should.have.been.called
  })

  it(`should log out an ascii sword with a default length when no message is provided`, () => {

    const sword = new AsciiSword()

    sword.log()

    consoleLogSpy.should.have.been.calledWith(`o==={{::::::::::::::::::>`)
  })

  it(`should log out an ascii sword with a message when a message is provided`, () => {

    const sword = new AsciiSword()

    sword.log(`Hello, world!`)

    consoleLogSpy.should.have.been.calledWith(`o==={{::::::::::::::::::> Hello, world!`)
  })

  it(`should log to a custom logger when provided`, () => {

    const sword = new AsciiSword({
      logger: customLogSpy
    })

    sword.log(`Hello, custom logger!`)

    customLogSpy.should.have.been.calledWith(`o==={{::::::::::::::::::> Hello, custom logger!`)
  })

  it(`should pass any additional arguments provided to the custom logger`, () => {

    const sword = new AsciiSword({
      logger: customLogSpy
    })

    const meta = {
      important: true
    }

    sword.log(`Hello, custom logger!`, meta)

    customLogSpy.should.have.been.calledWith(`o==={{::::::::::::::::::> Hello, custom logger!`, meta)
  })

  it(`should use display options when set`, () => {

    const dagger = new AsciiSword({
      hilt: 2,
      blade: 8
    })

    dagger.log()

    consoleLogSpy.should.have.been.calledWith(`o=={{::::::::>`)
  })
})