import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Departments from "./pages/Departments/Departments";
import DepartmentDetails from "./pages/Departments/DepartmentDetails";
 
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctors />} />
          {/* This route will handle doctor details */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/appointments" element={<Appointments />} />
           <Route path="/departments" element={<Departments />} />
           <Route path="/doctor" element={<Doctors />} />
           <Route path="/department/:id" element={<DepartmentDetails />} />
          <Route path="/appointments" element={<Appointments />} />
 
         </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
