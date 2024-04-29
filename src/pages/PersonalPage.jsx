import React from "react"
import { Link } from "react-router-dom"

const PersonalPage = () => {
  return (
    <div>
      <header className="p-10 text-center">
        <h1 className="text-3xl font-bold underline">Personal Blog</h1>
      </header>
      <div className="p-10 flex justify-around">
        <Link to="/blog-post-personal/1" className="relative hover:shadow-lg">
          <img
            className="w-80 h-60 transition duration-300 ease-in-out transform hover:scale-105"
            src="https://media2.giphy.com/media/fAcKMX8XrLZ1LRTlJI/200w.gif?cid=6c09b952q8lvtbrqlbclwmaa5sh8n6yq7kh0uer0jgisadkx&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Post 1"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-lg">
              Text for Post 1
            </span>
          </div>
        </Link>
        <Link to="/blog-post-personal/2" className="relative hover:shadow-lg">
          <img
            className="w-80 h-60 transition duration-300 ease-in-out transform hover:scale-105"
            src="https://media4.giphy.com/media/LaVp0AyqR5bGsC5Cbm/200w.gif?cid=6c09b9523eryk1iwoeui232avb8y5y9l41g56ceyv0gnwh4c&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Post 2"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-lg">
              Text for Post 2
            </span>
          </div>
        </Link>
        <Link to="/blog-post-coding/3" className="relative hover:shadow-lg">
          <img
            className="w-80 h-60 transition duration-300 ease-in-out transform hover:scale-105"
            src="https://i.gifer.com/origin/1d/1dc2e92177c43cac5bd2f59de5381a15_w200.gif"
            alt="Post 3"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-lg">
              Text for Post 3
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PersonalPage
