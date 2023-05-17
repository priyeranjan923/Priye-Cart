import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
// import Home from "./pages/Buy"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Buy from "./pages/Buy";
import Home from "./pages/Home";



const App = () => {
  return (
  <div className="w-screen h-screen   ">
        <div className="bg-slate-900 w-full">
          <Navbar/>
        </div>
        <Routes className="w-full h-full">
        <Route path="/buy" element={<Buy/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route className="" path="/" element={<Home/>} />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
        
  </div>)
};

export default App;
