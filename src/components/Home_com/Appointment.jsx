
import Lottie from "lottie-react";
import Appointment_anm from "../../Animation/Appointment.json";
import { useState, memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Appointment = memo(({ reverseLayout }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    medicalRecord: "",
    reason: "",
    department: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'phone', 'date', 'time', 'medicalRecord', 'reason', 'department'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = t("appointment.error_message");
      }
    });

    // Phone number validation
  {
  newErrors.phone = t("appointment.form.phone_error");
}


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("appointment.error_message"));
      return;
    }

    // If all validations pass
    console.log("Appointment Details:", formData);
    toast.success(t("appointment.success_message"));

    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      medicalRecord: "",
      reason: "",
      department: ""
    });
    setErrors({});
  };

  return (
    <section className="mb-[100px]" aria-labelledby="appointment-title">
      <div className="container px-4 mx-auto">
        <p className="mb-4 text-2xl font-semibold text-secondary">{t("appointment.book_an")}</p>
        <h2 id="appointment-title" className="pb-16 text-5xl font-semibold text-text_color">
          {t("appointment.title")}
        </h2>
        <div
          className={`flex items-center flex-col lg:gap-8 lg:items-start ${
            reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="name"
                  >
                    {t("appointment.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full p-2 border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-secondary'
                    }`}
                    placeholder={t("appointment.form.name_placeholder")}
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="phone"
                  >
                    {t("appointment.form.phone")} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full p-2 border rounded-md ${
                      errors.phone ? 'border-red-500' : 'border-secondary'
                    }`}
                    placeholder={t("appointment.form.phone_placeholder")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  className="block pb-2 text-[16px] font-medium text-text_color"
                  htmlFor="medical-record"
                >
                  {t("appointment.form.medical_record")} *
                </label>
                <input
                  type="text"
                  id="medical-record"
                  name="medicalRecord"
                  className={`w-full p-2 border rounded-md ${
                    errors.medicalRecord ? 'border-red-500' : 'border-secondary'
                  }`}
                  placeholder={t("appointment.form.medical_record_placeholder")}
                  value={formData.medicalRecord}
                  onChange={handleInputChange}
                  aria-describedby={errors.medicalRecord ? "medical-record-error" : undefined}
                  required
                />
                {errors.medicalRecord && (
                  <p id="medical-record-error" className="mt-1 text-sm text-red-500">
                    {errors.medicalRecord}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="date"
                  >
                    {t("appointment.form.preferred_date")} *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={`w-full p-2 border rounded-md ${
                      errors.date ? 'border-red-500' : 'border-secondary'
                    }`}
                    value={formData.date}
                    onChange={handleInputChange}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    required
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-1 text-sm text-red-500">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-1/2">
                  <label
                    className="block pb-2 text-[16px] font-medium text-text_color"
                    htmlFor="time"
                  >
                    {t("appointment.form.preferred_time")} *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className={`w-full p-2 border rounded-md ${
                      errors.time ? 'border-red-500' : 'border-secondary'
                    }`}
                    value={formData.time}
                    onChange={handleInputChange}
                    aria-describedby={errors.time ? "time-error" : undefined}
                    required
                  />
                  {errors.time && (
                    <p id="time-error" className="mt-1 text-sm text-red-500">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <fieldset>
                <legend className="block pb-2 text-[16px] font-medium text-text_color">
                  {t("appointment.form.reason_for_visit")} *
                </legend>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    t("appointment.reasons.routine_checkup"),
                    t("appointment.reasons.new_patient"),
                    t("appointment.reasons.specific_concern")
                  ].map((reason) => (
                    <label key={reason} className="flex items-center text-gray-600">
                      <input
                        type="radio"
                        name="reason"
                        value={reason}
                        className="mr-2"
                        checked={formData.reason === reason}
                        onChange={handleInputChange}
                        required
                      />
                      {reason}
                    </label>
                  ))}
                </div>
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.reason}
                  </p>
                )}
              </fieldset>

              <fieldset>
                <legend className="block pb-2 text-[16px] font-medium text-text_color">
                  {t("appointment.form.department")} *
                </legend>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    t("appointment.departments.pediatric"),
                    t("appointment.departments.emergency"),
                    t("appointment.departments.cardiology"),
                    t("appointment.departments.neurology")
                  ].map((dept) => (
                    <label key={dept} className="flex items-center text-gray-600">
                      <input
                        type="radio"
                        name="department"
                        value={dept}
                        className="mr-2"
                        checked={formData.department === dept}
                        onChange={handleInputChange}
                        required
                      />
                      {dept}
                    </label>
                  ))}
                </div>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.department}
                  </p>
                )}
              </fieldset>

              <button 
                type="submit" 
                className="butt"
                aria-describedby="submit-status"
              >
                {t("appointment.form.submit")}
              </button>
              <div id="submit-status" className="sr-only" aria-live="polite"></div>
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
    </section>
  );
});

Appointment.displayName = 'Appointment';

export default Appointment;