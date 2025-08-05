import bg_banner from "../../assets/img_home/bg_hero.png";

function Treatments() {
  const Treatmentss = [
    {
      icon: "fas fa-syringe", 
      title: "Vaccinations Department",
      description:
        "Providing essential vaccines to protect individuals from various diseases, ensuring community health and immunity.",
    },
    {
      icon: "fas fa-first-aid", 
      title: "Management of Acute Illnesses",
      description:
        "Comprehensive care and treatment for sudden and severe health conditions to ensure rapid recovery.",
    },
    {
      icon: "fas fa-heartbeat", 
      title: "Treatment of Chronic Conditions",
      description:
        "Specialized care for long-term health issues to improve quality of life and manage symptoms effectively.",
    },
    {
      icon: "fas fa-child", 
      title: "Developmental Screenings",
      description:
        "Evaluating children's developmental milestones to identify and address potential delays early.",
    },
    {
      icon: "fas fa-tshirt", 
      title: "Clothing and Fabric Care",
      description:
        "Guidance and services for selecting and maintaining appropriate attire for comfort, safety, and style.",
    },
  ];

  return (
    <div className="mb-[100px]">
      <p className="text-xl font-semibold text-secondary conttainer">
        MORE TYPE OF{" "}
      </p>
      <h2 className="pb-10 text-4xl font-bold text-text_color">
      Treatments
      </h2>

      <div
        className="container py-10 bg-center bg-cover rounded-2xl"
        style={{
          backgroundImage: `url(${bg_banner})`,
        }}
      >
 
        <div className="grid grid-cols-1 gap-4 px-10 py-10 sm:grid-cols-2 lg:grid-cols-5">
          {Treatmentss.map((item, index) => {
            return (
              <div className="flex items-start gap-4 p-4 " key={index}>
                <div className="items-center text-center">
                  <i
                    className={`${item.icon} text-4xl text-secondary rounded-full border border-secondary flex items-center justify-center w-16 h-16 mx-auto`}
                  ></i>
                  <h3 className="py-2 text-xl font-bold text-text_color">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Treatments;
