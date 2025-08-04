import Values_1 from "../../assets/img_home/Values-1.png";
import Values_2 from "../../assets/img_home/Values-2.png";
import Values_3 from "../../assets/img_home/Values-3.png";

function OurValues() {
  const values = [
    {
      title: "Compassion",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.",
      image: Values_1,
    },
    {
      title: "Excellence",
      description:
        "We are committed to providing excellent medical care and services to our patients. We continuously improve our skills, knowledge, and resources to deliver the highest quality care possible.",
      image: Values_2,
    },
    {
      title: "Integrity",
      description:
        "We believe in practicing medicine with integrity and honesty. Transparency in communication and decision-making processes ensures that we always prioritize our patient's interests.",
      image: Values_3,
    },
    {
      title: "Respect",
      description:
        "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. Every person deserves compassion and kindness.",
      image: Values_1,
    },
    {
      title: "Teamwork",
      description:
        "We collaborate with team members and healthcare professionals to provide comprehensive and effective care for our patients.",
      image: Values_1,
    },
  ];

  return (
    <div className="mb-[100px]">
      <section className="container">
        <h2 className="pb-20 text-3xl font-bold text-center text-text_color">
          Our Values
        </h2>
        <div className="grid gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className={`p-6 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448] ${
                item.title === "Excellence" ? "transform md:-translate-y-10 -translate-y-0" : ""
              }`}
            >
              <div className="flex items-center gap-4 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-full border-secondary bg-secondary"
                />
                <h3 className="text-2xl font-bold text-text_color">{item.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurValues;
