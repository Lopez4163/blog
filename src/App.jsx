import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CodingPost from "./components/CodingPost"
import PersonalPost from "./components/PersonalPost"
import CodingPage from "./pages/CodingPage"
import PersonalPage from "./pages/PersonalPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding-blog" element={<CodingPage />} />
        <Route path="/personal-blog" element={<PersonalPage />} />
        <Route path="/blog-post-coding/:postId" element={<CodingPost />} />
        <Route path="/blog-post-personal/:postId" element={<PersonalPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
