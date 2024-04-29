const express = require("express")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const db = require("../db/index.cjs")
require("dotenv").config()

// Middleware
authRouter.use(express.json())

// Register a new account
authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body

    // Check if the username already exists
    const existingUser = await db.getUserByUsername(username)
    if (existingUser) {
      return res.status(400).send("Username already exists.")
    }

    // Create the new user
    await db.createUser(username, password)

    // Create a token with the username
    const token = jwt.sign({ username }, process.env.JWT_SECRET)

    res.status(201).send({ token })
  } catch (error) {
    next(error)
  }
})

// Login to an existing user account
authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body

    // Check if the user exists and the password is correct
    const user = await db.getUserByUsernameAndPassword(username, password)
    if (!user) {
      return res.status(401).send("Invalid login credentials.")
    }

    // Create a token with the username
    const token = jwt.sign({ username }, process.env.JWT_SECRET)

    res.send({ token })
  } catch (error) {
    next(error)
  }
})

// Get the currently logged in user
authRouter.get("/me", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send("Unauthorized")
    }

    const username = req.user.username

    // Retrieve the user from the database
    const user = await db.getUserByUsername(username)
    if (!user) {
      return res.status(404).send("User not found.")
    }

    res.send(user)
  } catch (error) {
    next(error)
  }
})

module.exports = authRouter
