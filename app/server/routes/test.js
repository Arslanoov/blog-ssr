const { Router } = require("express")

const router = Router()

router.use("/test", (req, res) => {
  res.end("Test API!")
})

module.exports = router
