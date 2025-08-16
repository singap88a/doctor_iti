import Lottie from "lottie-react";
import Appointment_anm from "../../Animation/Appointment.json";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

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
  const [departments, setDepartments] = useState([]);
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const [loadingDoctors, setLoadingDoctors] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  // 🔹 جلب الأقسام
  useEffect(() => {
    setLoadingDepartments(true);
    fetch("https://backend-itiddoctor-395g.vercel.app/api/departments")
      .then(res => res.json())
      .then(data => {
        setDepartments(data.data || []);
        setLoadingDepartments(false);
      })
      .catch(err => {
        console.error("Error fetching departments:", err);
        toast.error("Failed to load departments");
        setLoadingDepartments(false);
      });
  }, []);

  // 🔹 جلب الدكاترة الخاصة بالقسم
  useEffect(() => {
    if (formData.department) {
      setLoadingDoctors(true);
      fetch(`https://backend-itiddoctor-395g.vercel.app/api/doctors?department=${formData.department}`)
        .then(res => res.json())
        .then(data => {
          // فلترة بحيث يظهروا دكاترة القسم فقط
          const filtered = (data.data || []).filter(
            (doc) => doc.department && doc.department._id === formData.department
          );
          setAvailableDoctors(filtered);
          setLoadingDoctors(false);
        })
        .catch(err => {
          console.error("Error fetching doctors:", err);
          toast.error("Failed to load doctors");
          setAvailableDoctors([]);
          setLoadingDoctors(false);
        });
    } else {
      setAvailableDoctors([]);
    }
  }, [formData.department]);

  // 🔹 التغيير في الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "department") {
      setFormData(prev => ({ ...prev, doctor: "" }));
    }
  };

  // 🔹 إرسال البيانات
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const response = await fetch('http://localhost:5000/api/appointments', {
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

  // 🔹 Loading الأقسام
  if (loadingDepartments) {
    return (
      <div className="container p-4 mx-auto">
        <p>Loading departments...</p>
      </div>
    );
  }

  return (
    <div className="mb-[100px]">
      <div className="container px-4 mx-auto">
        <p className="mb-4 text-2xl font-semibold text-secondary">
          {t("appointment.book_an")}
        </p>
        <h1 className="pb-16 text-5xl font-semibold text-text_color">
          {t("appointment.title")}
        </h1>
        <div
          className={`flex items-center flex-col lg:gap-8 lg:items-start ${
            reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* ================== الفورم ================== */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name + Phone */}
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    {t("appointment.form.name")}
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
                    {t("appointment.form.phone")}
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

              {/* Medical Record */}
              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  {t("appointment.form.medical_record")}
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

              {/* Date + Time */}
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    {t("appointment.form.preferred_date")}
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
                    {t("appointment.form.preferred_time")}
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

              {/* Reason */}
              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  {t("appointment.form.reason_for_visit")}
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

              {/* Departments */}
              <div>
                <label className="block pb-2 text-[16px] font-medium text-text_color">
                  {t("appointment.form.department")}
                </label>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {departments.map((dept) => (
                    <label key={dept._id} className="flex items-center text-gray-600">
                      <input
                        type="radio"
                        name="department"
                        value={dept._id}
                        className="mr-2"
                        checked={formData.department === dept._id}
                        onChange={handleChange}
                      />
                      {dept.translations?.[currentLang]?.title || dept.translations?.en?.title}
                    </label>
                  ))}
                </div>
              </div>

              {/* Doctors */}
              {formData.department && (
                <div>
                  <label className="block pb-2 text-[16px] font-medium text-text_color">
                    {t("appointment.form.select_doctor")}
                  </label>
                  {loadingDoctors ? (
                    <p>Loading doctors...</p>
                  ) : (
                    <select
                      name="doctor"
                      className="w-full p-2 border rounded-md border-secondary"
                      value={formData.doctor}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t("appointment.form.select_doctor")}</option>
                      {availableDoctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>
                          {doctor.translations?.[currentLang]?.name || doctor.translations?.en?.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}

              <button type="submit" className="butt">
                {t("appointment.form.submit")}
              </button>
            </form>
          </div>

          {/* ================== الأنيميشن ================== */}
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
