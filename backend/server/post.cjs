// routes.js
const express = require("express")
const postRouter = express.Router()
const db = require("../db/index.cjs")

// GET all posts
postRouter.get("/", async (req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET post by ID
postRouter.get("/:id", async (req, res) => {
  try {
    const post = await db.getPostById(req.params.id)
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST create new post
postRouter.post("/", async (req, res) => {
  try {
    const { title, content } = req.body
    await db.createPost(title, content)
    res.status(201).json({ message: "Post created successfully" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PUT update post by ID
postRouter.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body
    await db.updatePost(req.params.id, title, content)
    res.json({ message: "Post updated successfully" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE post by ID
postRouter.delete("/:id", async (req, res) => {
  try {
    await db.deletePost(req.params.id)
    res.json({ message: "Post deleted successfully" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = postRouter
