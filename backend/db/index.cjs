// db.js
const mysql = require("mysql2/promise")
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

async function getAllPosts() {
  const [rows] = await pool.query("SELECT * FROM posts")
  return rows
}

async function getPostById(id) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id])
  return rows[0]
}

async function createPost(title, content) {
  await pool.query("INSERT INTO posts (title, content) VALUES (?, ?)", [
    title,
    content,
  ])
}

async function updatePost(id, title, content) {
  await pool.query("UPDATE posts SET title = ?, content = ? WHERE id = ?", [
    title,
    content,
    id,
  ])
}

async function deletePost(id) {
  await pool.query("DELETE FROM posts WHERE id = ?", [id])
}

//auth queries
async function getUserByUsername(username) {
  const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [
    username,
  ])
  return rows[0]
}

async function createUser(username, password) {
  await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    password,
  ])
}

async function getUserByUsernameAndPassword(username, password) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  )
  return rows[0]
}

module.exports = {
  pool,
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getUserByUsername,
  createUser,
  getUserByUsernameAndPassword,
}
