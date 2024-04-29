import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CodingPost = () => {
  const { postId } = useParams()
  const [codingPost, setCodingPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `/jsonPosts/codingPosts/post${postId}.json`
        )
        console.log(response)
        const postData = await response.json()
        console.log(postData)
        setCodingPost(postData)
      } catch (error) {
        console.error("Error fetching blog post:", error)
      }
    }

    fetchPost()
  }, [postId])
  if (!codingPost) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header>
        <h1>{codingPost.title}</h1>
        <p>
          By {codingPost.author} on {codingPost.date}
        </p>
      </header>
      <div>
        {codingPost.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>
          } else if (item.type === "image") {
            return (
              <div key={index}>
                <img src={item.src} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            )
          } else {
            return null // Handle other types if needed
          }
        })}
      </div>
    </div>
  )
}

export default CodingPost
