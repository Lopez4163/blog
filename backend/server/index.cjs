const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const path = require("path")
const cors = require("cors")
const postRouter = require("./post.cjs")
const authRouter = require("../auth/index.cjs")
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(morgan("dev")) // Morgan for logging HTTP requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Custom middleware to log request body
app.use((req, res, next) => {
  console.log("<---- Body Logger START ---->")
  console.log(req.body)
  console.log("<----- Body Logger END ----->")
  next()
})

// Mount the routers
app.use("/post", postRouter) // Mount all routes under the /post prefix
app.use("/auth", authRouter) // Mount all routes under the /auth prefix

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
