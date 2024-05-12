import React, { useState, useEffect } from "react"

const PostCreatorView = ({
  jsonContainer,
  setJsonContainer,
  editMode,
  setEditMode,
}) => {
  const [editModeJsonContainer, setEditModeJsonContainer] = useState([])

  const handleSave = () => {
    setJsonContainer(editModeJsonContainer)
    setEditMode(prevEditMode => !prevEditMode)
  }

  return (
    <div className="flex flex-col justify-center items-center p-5">
      {editMode && (
        <button
          onClick={handleSave}
          className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4  border border-white-500 hover:border-transparent rounded"
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
                  updatedJsonContainer[index].value = e.target.value
                  setEditModeJsonContainer(updatedJsonContainer)
                }}
              />
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
