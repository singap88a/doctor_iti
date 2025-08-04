import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Timetable from "./pages/Timetable/Timetable";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Appointments from "./pages/Appointments/Appointments";
 
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
                    <Route path="/timetable" element={<Timetable />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointments" element={<Appointments />} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
