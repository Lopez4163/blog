import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-around p-8 text-lg">
          <li>
            <Link to="/" className="">
              homeScreen
            </Link>
          </li>
          <li>
            <Link to="/coding-blog">codingBlog</Link>
          </li>
          <li>
            <Link to="/personal-blog">personalBlog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
