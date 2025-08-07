import heroimg from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../components/About_com/Hero_about";
import appointmentData from "../Doctors/tracksData"
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timetable = () => {
  return (
    <div className="">
      <Hero_about
        titleKey="timetable.title"
        descriptionKey="timetable.description"
        img={heroimg}
        reverseLayout={true}
      />
      <div className="container p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-collapse border-gray-200 table-auto">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-2 border border-gray-300">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* الساعات  */}
              {[
                "8:00 AM",
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
                "2:00 PM",
              ].map((time) => (
                <tr key={time}>
                  <td className="p-2 text-center border border-gray-300">
                    {time}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="p-2 border border-gray-300">
                      {appointmentData
                        .filter((doctor) =>
                          doctor.appointmentSchedules.some(
                            (schedule) =>
                              schedule.day === day &&
                              schedule.time.includes(time)
                          )
                        )
                        .map((doctor, index) => (
                          <div
                            key={index}
                            className="p-2 mb-2 bg-blue-100 rounded shadow-sm"
                          >
                            <p className="font-bold">{doctor.Department}</p>
                            <p>{doctor.title}</p>
                            <p>{doctor.contactInfo.phone}</p>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default timetable;
