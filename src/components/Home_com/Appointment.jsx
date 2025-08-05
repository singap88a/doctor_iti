/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import Appointment_anm from "../../Animation/Appointment.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Appointment({ reverseLayout }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [medicalRecord, setMedicalRecord] = useState("");
  const [reason, setReason] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();


    // بلداشن للحقول المطلوبة
    if (
      name === "" ||
      phone === "" ||
      date === "" ||
      time === "" ||
      medicalRecord === "" ||
      reason === "" ||
      department === ""
    ) {
      toast.error("Please fill all required fields");
      return; // إيقاف التنفيذ إذا كانت هناك حقول فارغة
    }

    // إذا كانت جميع الحقول ممتلئة
    console.log("Appointment Details:", {
      name,
      phone,
      date,
      time,
      medicalRecord,
      reason,
      department,
    });

    toast.success("Appointment booked successfully!");

    // إعادة تعيين الحقول
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setMedicalRecord("");
    setReason("");
    setDepartment("");
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
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md border-secondary"
                    placeholder="David John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border rounded-md border-secondary"
                    placeholder="(123) 456 - 789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block pb-2 text-[16px] font-medium text-text_color"
                  htmlFor="medical-record"
                >
                  Medical Record Number
                </label>
                <input
                  type="text"
                  id="medical-record"
                  className="w-full p-2 border rounded-md border-secondary"
                  placeholder="123456-7890-0987"
                  value={medicalRecord}
                  onChange={(e) => setMedicalRecord(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="date"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full p-2 border rounded-md border-secondary"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="time"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full p-2 border rounded-md border-secondary"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  Reason for Visit
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="reason"
                      value="Routine Checkup"
                      className="mr-2"
                      checked={reason === "Routine Checkup"}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    Routine Checkup
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="reason"
                      value="New Patient Visit"
                      className="mr-2"
                      checked={reason === "New Patient Visit"}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    New Patient Visit
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="reason"
                      value="Specific Concern"
                      className="mr-2"
                      checked={reason === "Specific Concern"}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    Specific Concern
                  </label>
                </div>
              </div>

              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  Department
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="department"
                      value="Pediatric"
                      className="mr-2"
                      checked={department === "Pediatric"}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    Pediatric
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="department"
                      value="Obstetrics and Gynecology"
                      className="mr-2"
                      checked={department === "Obstetrics and Gynecology"}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    Emergency{" "}
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="department"
                      value="Cardiology"
                      className="mr-2"
                      checked={department === "Cardiology"}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    Cardiology
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="radio"
                      name="department"
                      value="Neurology"
                      className="mr-2"
                      checked={department === "Neurology"}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    Neurology
                  </label>
                </div>
              </div>  

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
