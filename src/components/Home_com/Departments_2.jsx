import Departments from "../../assets/img_home/Departments_2.png"
export default function Departments_2() {
  const Departmentss = [
    {
      title: "Malcolm Baldrige National Quality Award",
      description:
        "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
      image: Departments,
    },
    {
      title: "HIMSS Davies Award",
      description:
        "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
      image: Departments,
    },
    {
      title: "Healthgrades National’s Best Hospital",
      description:
        "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
      image: Departments,
    },
    {
      title: "Joint Commission Gold Seal of Approval",
      description:
        "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
      image: Departments,
    },
  ];
  return (
    <div className="mb-[100px]">
      <section className="container">
        <h2 className="pb-10 text-3xl font-bold text-text_color text-center">
          Departments
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {Departmentss.map((item, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg white rounded-lg shadow-[0px_0px_20px_1px_#307ac448]
            hover:shadow-[0px_0px_20px_10px_#307ac448">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-md border-secondary bg-secondary"
                />
                <h3 className="font-bold text-[16px] text-text-color">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
          ))}
        </div>
      </section>
      
    </div>
  )
}
 