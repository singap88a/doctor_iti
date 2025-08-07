/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import Appointment_anm from "../../Animation/Appointment.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Doctor options by department
const DOCTORS_BY_DEPARTMENT = {
  Pediatric: ["Dr. Smith", "Dr. Johnson", "Dr. Williams"],
  "Obstetrics and Gynecology": ["Dr. Brown", "Dr. Jones", "Dr. Garcia"],
  Cardiology: ["Dr. Miller", "Dr. Davis", "Dr. Rodriguez"],
  Neurology: ["Dr. Martinez", "Dr. Hernandez", "Dr. Lopez"],
  Emergency: ["Dr. Gonzalez", "Dr. Wilson", "Dr. Anderson"]
};

function Appointment({ reverseLayout }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    medicalRecord: "",
    reason: "",
    department: "",
    doctor: ""
  });
  const [availableDoctors, setAvailableDoctors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update available doctors when department changes
    if (name === "department") {
      setAvailableDoctors(DOCTORS_BY_DEPARTMENT[value] || []);
      setFormData(prev => ({ ...prev, doctor: "" })); // Reset doctor selection
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.medicalRecord ||
      !formData.reason ||
      !formData.department ||
      !formData.doctor
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch('https://backend-itiddoctor-395g.vercel.app/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book appointment');
      }

      toast.success("Appointment booked successfully!");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        medicalRecord: "",
        reason: "",
        department: "",
        doctor: ""
      });
      setAvailableDoctors([]);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mb-[100px]">
      <div className="container px-4 mx-auto">
        <p className="mb-4 text-2xl font-semibold text-secondary">BOOK AN</p>
        <h1 className="pb-16 text-5xl font-semibold text-text_color">
          Appointment
        </h1>
        <div
          className={`flex items-center flex-col lg:gap-8 lg:items-start ${
            reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded-md border-secondary"
                    placeholder="David John"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-2 border rounded-md border-secondary"
                    placeholder="(123) 456 - 789"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  Medical Record Number
                </label>
                <input
                  type="text"
                  name="medicalRecord"
                  className="w-full p-2 border rounded-md border-secondary"
                  placeholder="123456-7890-0987"
                  value={formData.medicalRecord}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full p-2 border rounded-md border-secondary"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    className="w-full p-2 border rounded-md border-secondary"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  Reason for Visit
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {["Routine Checkup", "New Patient Visit", "Specific Concern"].map((option) => (
                    <label key={option} className="flex items-center text-gray-600">
                      <input
                        type="radio"
                        name="reason"
                        value={option}
                        className="mr-2"
                        checked={formData.reason === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  Department
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Object.keys(DOCTORS_BY_DEPARTMENT).map((dept) => (
                    <label key={dept} className="flex items-center text-gray-600">
                      <input
                        type="radio"
                        name="department"
                        value={dept}
                        className="mr-2"
                        checked={formData.department === dept}
                        onChange={handleChange}
                      />
                      {dept}
                    </label>
                  ))}
                </div>
              </div>

              {formData.department && (
                <div>
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    Select Doctor
                  </label>
                  <select
                    name="doctor"
                    className="w-full p-2 border rounded-md border-secondary"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a doctor</option>
                    {availableDoctors.map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button type="submit" className="butt">
                Submit
              </button>
            </form>
          </div>

          <div className="flex justify-center w-full mt-10 lg:w-1/2 md:mt-0">
            <Lottie
              animationData={Appointment_anm}
              className="w-full md:h-[500px] h-full"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Appointment;