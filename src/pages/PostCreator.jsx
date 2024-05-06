import React, { useState } from "react"

const PostCreator = () => {
  const [jsonContainer, setJsonContainer] = useState([])
  const [imageUrl, setImageUrl] = useState("")
  const [textarea, setTextarea] = useState("")

  const handleTextArea = text => {
    // Update jsonContainer with new object containing text
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "text", value: text },
    ])
  }

  const handleImgUrl = imgUrl => {
    // Update jsonContainer with new object containing image URL
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "imageUrl", value: imgUrl },
    ])
  }

  const createJsonFile = async () => {
    console.log(jsonContainer)
    try {
      const response = await fetch("http://localhost:3000/create-json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jsonContent: jsonContainer }),
      })
      console.log(response)

      if (response.ok) {
        console.log("JSON file created successfully.")
      } else {
        console.error("Failed to create JSON file.")
      }
    } catch (error) {
      console.error("Error creating JSON file:", error)
    }
  }

  return (
    <div>
      <div>
        <div>
          <textarea
            placeholder="insert text"
            onChange={e => {
              setTextarea(e.target.value)
            }}
          />
          <button onClick={() => handleTextArea(textarea)}>Add Text</button>
        </div>
        <div>
          <textarea
            placeholder="insert image url"
            onChange={e => {
              setImageUrl(e.target.value)
            }}
          />
          <button onClick={() => handleImgUrl(imageUrl)}>Add Image</button>
        </div>
      </div>
      <div>
        {/* Render each item in jsonContainer array */}
        {jsonContainer.map((item, index) => (
          <div key={index}>
            {/* Render different content based on type */}
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : item.type === "imageUrl" ? (
              <img src={item.value} alt="User uploaded" />
            ) : null}
          </div>
        ))}
      </div>
      <button onClick={createJsonFile}>Download JSON File</button>
    </div>
  )
}

export default PostCreator
