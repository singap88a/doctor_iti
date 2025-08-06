import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";
import DoctorDetails from "./pages/Doctors/DoctorDetail";
import Gallery from "./pages/Gallery/Gallery";
import Departments from "./pages/Departments/Departments";
import DepartmentDetails from "./pages/Departments/DepartmentDetails";
import Appointments from "./pages/Appointments/Appointments";
import Timetable from "./pages/Timetable/Timetable";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
 

// import DoctorDetail from "./pages/Doctors/DoctorDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />{" "}
          {/* This route will handle doctor details */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/department/:id" element={<DepartmentDetails />} />
          {/* Appointments */}
          <Route path="/appointments" element={<Appointments />} />
          {/* Timetable */}
          <Route path="/timetable" element={<Timetable />} />
          {/* Auth */}
            {/* Admin */}
         </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;