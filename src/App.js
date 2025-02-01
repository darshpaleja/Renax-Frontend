import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimatedCurser from './Components/AnimatedCurser';
import About from './Components/Pages/Abour';
import Services from './Components/Pages/services/Services';
import Cars from './Components/Pages/Cars';
import CarDetails from './Components/Pages/CarDetails';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import Profile from './Components/Pages/Profile';
function App() {
  return (
    // <BrowserRouter>
    <>
      <AnimatedCurser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/car-details/:id" element={<CarDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      </>
    // {/* </BrowserRouter> */}
  );
}

export default App;
