// seed.js
const db = require("../db/index.cjs")

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
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
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

    // Insert sample data into posts table
    await db.pool.query(`
      INSERT INTO posts (title, content) VALUES
      ('First Post', 'This is the content of the first post.'),
      ('Second Post', 'This is the content of the second post.'),
      ('Third Post', 'This is the content of the third post.'),
      ('Fourth Post', 'This is the content of the fourth post.'),
      ('Fifth Post', 'This is the content of the fifth post.');
    `)
    console.log("Sample posts inserted successfully.")

    // Insert sample data into users table
    await db.pool.query(`
      INSERT INTO users (username, password) VALUES
      ('user', '123');
    `)
    console.log("User inserted successfully.")
  } catch (err) {
    console.error("Error seeding tables:", err)
  }
}

seedPosts()
