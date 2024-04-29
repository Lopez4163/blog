// HomeScreen.js
import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { EmblaCarousel } from "../components/EmblaCarousel"

const Home = () => {
  return (
    <div>
      <header className="p-10 text-center">
        <h1 className="text-3xl font-bold underline">My Blog</h1>
      </header>
      <div className="p-10 flex flex-row justify-center justify-around">
        <div className="flex-column justify-center text-center max-w-xl">
          <h2 className="p-2 text-2xl">About Me</h2>
          <p className="p-1 text-lg">
            f vsxgdfgdfgdfgdfgdfgdfgdfdsfsdfsdfdfsddfgdfgdfgfdzfsdfsdfsdf f
            vsxgdfgdfgdfgdfgdfgdfgdfdsfsdfsdfdfsddfgdfgdfgfdzfsdfsdfsdf f
            vsxgdfgdfgdfgdfgdfgdfgdfdsfsdfsdfdfsddfgdfgdfgfdzfsdfsdfsdf f
            vsxgdfgdfgdfgdfgdfgdfgdfdsfsdfsdfdfsddfgdfgdfgfdzfsdfsdfsdf
          </p>
        </div>
        <div>
          <EmblaCarousel />
        </div>
      </div>
      <div>
        <div>
          <h1>Interested in My Blog? </h1>
          <p>
            If you want to stay uptodate with my latest projects and interesting
            things in my personal life, subscribe to my blog and get the latest
            posts
          </p>
          <input placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Home
