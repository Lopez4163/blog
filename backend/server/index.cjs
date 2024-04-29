// server.js
const express = require("express")
const morgan = require("morgan")
const postRouter = require("./post.cjs")
const authRouter = require("../auth/index.cjs")
const db = require("../db/index.cjs")

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(morgan("dev"))
app.use(express.json())

// Mount the router
app.use("/post", postRouter) // Mount all routes under the /post prefix
app.use("/auth", authRouter) // Mount all routes under the /post prefix

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
