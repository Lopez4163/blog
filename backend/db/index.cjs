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

async function addPost(jsonContent, blogType) {
  const query = "INSERT INTO posts (posts, type) VALUES (?, ?)"
  try {
    await pool.query(query, [JSON.stringify(jsonContent), blogType])
    console.log("JSON content inserted into database successfully.")
  } catch (error) {
    console.error("Error inserting JSON content into database:", error)
    throw error
  }
}

module.exports = {
  pool,
  getAllPosts,
  getPostById,
  addPost,
}
