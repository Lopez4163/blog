// BlogPost.js
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const PersonalPost = () => {
  const { postId } = useParams()
  const [personalPost, setPersonalPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `/jsonPosts/personalPosts/post${postId}.json`
        )
        console.log(response)
        const postData = await response.json()
        console.log(postData)
        setPersonalPost(postData)
      } catch (error) {
        console.error("Error fetching blog post:", error)
      }
    }

    fetchPost()
  }, [postId])
  if (!personalPost) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header>
        <h1>{personalPost.title}</h1>
        <p>
          By {personalPost.author} on {personalPost.date}
        </p>
      </header>
      <div>
        {personalPost.content.map((item, index) => {
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

export default PersonalPost
