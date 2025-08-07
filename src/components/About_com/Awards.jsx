import Departments from "../../assets/img_home/Departments_2.png";
function Awards() {
  const Departmentss = [
    {
      title: "Malcolm Baldrige National Quality Award",
      image: Departments,
    },
    {
      title: "HIMSS Davies Award",
      image: Departments,
    },
    { 
      title: "Healthgrades National’s Best Hospital",
      image: Departments,
    },
    {
      title: "Joint Commission Gold Seal of Approval",
      image: Departments,
    },
    {
      title: "American Hospital Association (AHA) Award of Honor",
      image: Departments, // Represents excellence in healthcare services
    },
    {
      title: "Beacon Award for Excellence in Critical Care",
      image: Departments, // Represents high standards in patient care
    },
  ];
  
  return (
    <div className="mb-[100px]">
      <section className="container ">
      <p className="text-xl font-semibold text-center text-secondary">
          AWARDS
        </p>
        <h1 className="text-3xl font-bold text-center text-text_color">
          Winning Awards and Recognition 
        </h1>
        <p className="pt-5 pb-10 text-center text-Paragraph md:w-[30%] w-full mx-auto">
          We have been recognized for our commitment to excellence in healthcare
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Departmentss.map((item, index) => (
            <div
              key={index}
              className="p-4 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-md border-secondary bg-secondary"
                />
                <h3 className="font-bold text-[16px] text-text_color">
                  {item.title}
                </h3>
              </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Awards;