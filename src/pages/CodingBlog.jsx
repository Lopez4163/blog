import React, { useState, useEffect } from "react"

const CodingBlog = () => {
  const [codingBlogs, setCodingBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/post")
        if (!response.ok) {
          throw new Error("Failed to fetch blogs")
        }
        const data = await response.json()
        console.log("Fetched data:", data) // Log the fetched data
        const codingBlogsData = data.filter(blog => blog.type === "coding")
        console.log("Filtered coding blogs:", codingBlogsData) // Log the filtered coding blogs
        setCodingBlogs(codingBlogsData)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 className="text-3xl text-center">Coding Blogs</h1>
      <div className="flex p-20">
        {codingBlogs.map(blog => (
          <div key={blog.id} className="m-5">
            {blog.posts.map((post, index) => (
              <div key={index}>
                {post.type === "thumbnailImg" && (
                  <img
                    className=" h-56 w-64"
                    src={post.value}
                    alt="Thumbnail"
                  />
                )}
                {post.type === "title" && (
                  <h2 className="text-center text-2xl">{post.value}</h2>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodingBlog
