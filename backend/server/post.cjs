// routes.js
const express = require("express")
const postRouter = express.Router()
const db = require("../db/index.cjs")
const mysql = require("mysql2/promise")

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
postRouter.post("/create-post", async (req, res) => {
  const { jsonContent, blogType } = req.body
  try {
    await db.addPost(jsonContent, blogType)
    console.log("JSON content inserted into database successfully.")
    res.status(200).send("JSON content inserted into database successfully.")
  } catch (error) {
    console.error("Error inserting JSON content into database:", error)
    res.status(500).send("Error inserting JSON content into database.")
  }
})

// PUT update post by ID
postRouter.put("/:id", async (req, res) => {
  try {
    const { json_content } = req.body
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
