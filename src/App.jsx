import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CodingPost from "./components/CodingPost"
import PersonalPost from "./components/PersonalPost"
import PostCreator from "./pages/PostCreator"
import CodingBlog from "./pages/CodingBlog"
import PersonalBlog from "./pages/PersonalBlog"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding-blog" element={<CodingBlog />} />
        <Route path="/personal-blog" element={<PersonalBlog />} />
        <Route path="/blog-post-coding/:postId" element={<CodingPost />} />
        <Route path="/blog-post-personal/:postId" element={<PersonalPost />} />
        <Route path="/create-post" element={<PostCreator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
