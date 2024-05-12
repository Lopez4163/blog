import React, { useEffect, useState } from "react"
import PostCreatorView from "../components/PostCreatorView"
import { createJsonFile } from "../utils"

const PostCreator = () => {
  const [jsonContainer, setJsonContainer] = useState([])
  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [textarea, setTextarea] = useState("")
  const [blogType, setBlogType] = useState("")
  const [postCreated, setPostCreated] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [error])

  const handleTypeOfPost = type => {
    setBlogType(type)
  }

  const handleTitle = title => {
    // Update jsonContainer with new object containing text
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "title", value: title },
    ])
  }

  const handleThumbnail = url => {
    // Update jsonContainer with new object containing text
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "thumbnailImg", value: url },
    ])
  }

  const handleTextArea = text => {
    // Update jsonContainer with new object containing text
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "textBlock", value: text },
    ])
  }

  const handleImgUrl = url => {
    setJsonContainer(prevJsonContainer => [
      ...prevJsonContainer,
      { type: "blockImg", value: url },
    ])
  }

  const toggleEditMode = () => {
    setEditMode(prevEditMode => !prevEditMode)
  }

  const handleCreateJsonFile = () => {
    createJsonFile(
      jsonContainer,
      blogType,
      title,
      thumbnail,
      textarea,
      imageUrl,
      setError,
      setJsonContainer
    )
    setPostCreated(true)
    return <h1>Post Created</h1>
  }

  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <div className="flex flex-col justify-center h-80 p-20">
          <div>
            <div className="mb-5 text-center">
              <h1 className="text-2xl">Post And Thumbnail Details</h1>
            </div>
            <div className="flex justify-center mb-5 text-center gap-5">
              <label className="mr-4">
                <input
                  type="radio"
                  value="personal"
                  onChange={() => handleTypeOfPost("personal")} // Update state when 'personal' option is selected
                  checked={blogType === "personal"} // Check if 'personal' option is selected
                  className="mr-2"
                />
                Personal
              </label>
              <label>
                <input
                  type="radio"
                  value="coding"
                  onChange={() => handleTypeOfPost("coding")} // Update state when 'coding' option is selected
                  checked={blogType === "coding"} // Check if 'coding' option is selected
                  className="mr-2"
                />
                Coding
              </label>
            </div>
          </div>
          <div>
            <input
              placeholder="insert thumbnail title"
              onChange={e => {
                setTitle(e.target.value)
              }}
            />
            <button
              className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4 w-28 border border-white-500 hover:border-transparent rounded"
              onClick={() => handleTitle(title)}
            >
              Add Title
            </button>
          </div>
          <div>
            <input
              placeholder="insert thumbnail Url"
              onChange={e => {
                setThumbnail(e.target.value)
              }}
            />
            <button
              className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4 w-28 border border-white-500 hover:border-transparent rounded"
              onClick={() => handleThumbnail(thumbnail)}
            >
              Add Url
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center h-80 p-20">
          <div className="">
            <div className="mb-5 text-center">
              <h1 className="text-2xl">Text Blocks and Images</h1>
            </div>
            <div className="flex flex-col">
              <textarea
                className="h-36 w-full"
                placeholder="insert text"
                onChange={e => {
                  setTextarea(e.target.value)
                }}
              />
              <button
                className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4 w-full border border-white-500 hover:border-transparent rounded"
                onClick={() => handleTextArea(textarea)}
              >
                Add Text
              </button>
            </div>
            <div>
              <input
                placeholder="insert image url"
                onChange={e => {
                  setImageUrl(e.target.value)
                }}
              />
              <button
                className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4  border border-white-500 hover:border-transparent rounded"
                onClick={() => handleImgUrl(imageUrl)}
              >
                Add Image
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4  border border-white-500 hover:border-transparent rounded"
          onClick={handleCreateJsonFile}
        >
          Download JSON File
        </button>

        <button
          className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4  border border-white-500 hover:border-transparent rounded"
          onClick={toggleEditMode}
        >
          Edit Mode
        </button>
        <label className="border-solid border-white">
          {editMode ? (
            <span className="text-green-500 p-2.5 border border-white">ON</span>
          ) : (
            <span className="text-red-500 p-2.5 border border-white">OFF</span>
          )}
        </label>

        {error && <h3 className="text-red-500">Leave no empty fields</h3>}
      </div>
      <div>
        <PostCreatorView
          jsonContainer={jsonContainer}
          setJsonContainer={setJsonContainer}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </div>
    </div>
  )
}

export default PostCreator
