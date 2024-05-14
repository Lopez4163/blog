import React, { useState, useEffect } from "react"

const PersonalBlog = () => {
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
        const codingBlogsData = data.filter(blog => blog.type === "personal")
        console.log("Filtered coding blogs:", codingBlogsData) // Log the filtered coding blogs
        setCodingBlogs(codingBlogsData)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex p-20">
      {codingBlogs.map(blog => (
        <div key={blog.id} className="m-5">
          {blog.posts.map((post, index) => {
            if (post.type === "thumbnailImg") {
              const titlePost = blog.posts.find(p => p.type === "title")
              return (
                <div key={index} className="relative">
                  <img className="h-56 w-64" src={post.value} alt="Thumbnail" />
                  {/* Render title below the thumbnail */}
                  {titlePost && (
                    <h2 className="text-center text-2xl mt-2">
                      {titlePost.value}
                    </h2>
                  )}
                </div>
              )
            }
            return null
          })}
        </div>
      ))}
    </div>
  )
}

export default PersonalBlog
