import React, { useState, useEffect } from "react"

const PostCreatorView = ({
  jsonContainer,
  setJsonContainer,
  editMode,
  setEditMode,
}) => {
  const [editModeJsonContainer, setEditModeJsonContainer] = useState([])

  useEffect(() => {
    // Save a copy of jsonContainer when entering edit mode
    if (editMode) {
      setEditModeJsonContainer([...jsonContainer])
    }
  }, [editMode, jsonContainer])

  // Function to handle saving changes
  const handleSave = () => {
    // Check if any changes were made during edit mode
    const changesMade = jsonContainer.some((item, index) => {
      return item.value !== editModeJsonContainer[index].value
    })

    if (!changesMade) {
      // No changes were made, revert back to the original copy
      setJsonContainer([...editModeJsonContainer])
    } else {
      // Remove empty strings before saving
      const nonEmptyJsonContainer = jsonContainer
        .map(item => {
          return { ...item, value: item.value.trim() }
        })
        .filter(item => item.value !== "")

      // Update the jsonContainer state with non-empty values
      setJsonContainer(nonEmptyJsonContainer)
    }

    // Turn off edit mode
    setEditMode(false)
  }

  return (
    <div className="flex flex-col justify-center items-center p-5">
      {editMode && (
        <button
          onClick={handleSave}
          className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
        >
          SAVE
        </button>
      )}
      {jsonContainer.map((item, index) => (
        <div key={index} className="p-5">
          {editMode ? (
            <>
              <input
                type="text"
                value={item.value}
                onChange={e => {
                  const updatedJsonContainer = [...jsonContainer]
                  const newValue = e.target.value
                  updatedJsonContainer[index] = { ...item, value: newValue }
                  setJsonContainer(updatedJsonContainer)
                }}
              />
              <button
                className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
                onClick={() => {
                  const updatedJsonContainer = [...jsonContainer]
                  updatedJsonContainer.splice(index, 1)
                  setJsonContainer(updatedJsonContainer)
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <>
              {item.type === "title" ? (
                <h1 className="text-3xl">{item.value}</h1>
              ) : item.type === "thumbnailImg" ? (
                <img src={item.value} alt="User uploaded" />
              ) : item.type === "textBlock" ? (
                <p>{item.value}</p>
              ) : item.type === "blockImg" ? (
                <img
                  src={item.value}
                  className="h-textBlockHeight w-texBlockWidth"
                  alt="User uploaded"
                />
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default PostCreatorView
