# ascii-sword

`o==={{::::::::::::::::::> Sharper log messages.`

## Usage

`$ npm install --save ascii-sword`

```
const AsciiSword = require(`ascii-sword`)
const sword = new AsciiSword()
sword.log(`Your message here!`) // outputs to `console.log`
```

```
const myCustomLogger = (message, meta, source) {
  
  if (source === `server`) {

    handleMeta(meta)
  }

  logger.info(message)
}

const sword = new AsciiSword({
  logger: myCustomLogger
})

sword.log(`Message with custom logger!`, { important: true }, `server`) // passed to `myCustomLogger` with arguments
```

## Tests

`$ npm run tests`