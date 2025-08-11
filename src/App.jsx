import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
import ScrollToTop from "./ScrollToTop";
import AppointmentManagement from "./pages/admin/AppointmentManagement";

// Admin Dashboard Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import DepartmentManagement from "./pages/admin/DepartmentManagement";
import DoctorManagement from "./pages/admin/DoctorManagement";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/department/:id" element={<DepartmentDetails />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/appointments"
            element={
              <PrivateRoute>
                <AppointmentManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/departments"
            element={
              <PrivateRoute>
                <DepartmentManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/doctors"
            element={
              <PrivateRoute>
                <DoctorManagement />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
