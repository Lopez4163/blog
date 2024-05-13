// seed.js
const db = require("../db/index.cjs")
const seedData = require("./seedData.cjs")

// Function to seed the posts and users tables
async function seedPosts() {
  try {
    // Drop the posts and users tables if they exist
    await db.pool.query("DROP TABLE IF EXISTS posts")
    await db.pool.query("DROP TABLE IF EXISTS users")
    console.log("Posts and users tables dropped successfully.")

    // Create the posts table
    await db.pool.query(`
    CREATE TABLE posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      posts JSON,
      type TEXT NOT NULL
    );
    `)
    console.log("Posts table created successfully.")

    // Create the users table
    await db.pool.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password TEXT NOT NULL
      );
    `)
    console.log("Users table created successfully.")

    for (const blog of seedData) {
      const postsJson = JSON.stringify(blog.posts)
      const type = blog.type
      await db.pool.query(
        `
        INSERT INTO posts (posts, type)
        VALUES (?, ?);
        `,
        [postsJson, type]
      )
    }
    console.log("Sample posts inserted successfully.")

    await db.pool.end()
    console.log("Disconnected from the database.")
  } catch (err) {
    console.error("Error seeding tables:", err)
  }
}

seedPosts()
