export const createJsonFile = async (
  jsonContainer,
  blogType,
  title,
  thumbnail,
  textarea,
  imageUrl,
  setError,
  setJsonContainer
) => {
  console.log("hit")
  if (!jsonContainer.length || !blogType || !title || !thumbnail || !textarea) {
    setError(true)
    return
  }
  try {
    const response = await fetch("http://localhost:3000/post/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonContent: jsonContainer,
        blogType: blogType,
      }),
    })
    console.log(response)
    setJsonContainer([])
    if (response.ok) {
      setError(false)
      console.log("JSON file created successfully.")
    } else {
      console.error("Failed to create JSON file.")
    }
  } catch (error) {
    console.error("Error creating JSON file:", error)
  }
}
