import { Route,Routes, Navigate } from "react-router-dom"
import Home from "./Home"
import MenuComponent from "./MenuComponent"
import About from "./About"
import Contact from "./Contact"
const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/menu" element = {<MenuComponent/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default BodyComponent