import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import './App.css'
import Navbar from "./components/common/Navbar"
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import PageNotFound from "./pages/PageNotFound"
import VerifyEmail from "./pages/VerifyEmail"

function App() {
  

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="//verify-email" element={<VerifyEmail/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default App
