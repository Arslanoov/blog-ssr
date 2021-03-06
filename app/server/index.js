const express = require("express")

const app = express()

const test = require("./routes/test")

app.use(test)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
