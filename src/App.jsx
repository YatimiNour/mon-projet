import Navbar from "./composents/Navbar"
import Home from "./pages/Home"
import Inscription from "./pages/Inscription"
import Photos from "./pages/Photos"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </>
  )
}

export default App
