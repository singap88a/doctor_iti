import doctor_1 from "../../assets/img_doctors/doctor_1.png";
import doctor_2 from "../../assets/img_doctors/doctor_2.png";
import doctor_3 from "../../assets/img_doctors/doctor_3.png";
import doctor_4 from "../../assets/img_doctors/doctor_4.png";
import doctor_5 from "../../assets/img_doctors/doctor_5.png";
import doctor_6 from "../../assets/img_doctors/doctor_6.png";
import doctor_7 from "../../assets/img_doctors/doctor_7.png";
import doctor_8 from "../../assets/img_doctors/doctor_8.png";
import doctor_9 from "../../assets/img_doctors/doctor_9.png";
import doctor_10 from "../../assets/img_doctors/doctor_10.png";
import doctor_11 from "../../assets/img_doctors/doctor_11.png";
import doctor_12 from "../../assets/img_doctors/doctor_12.png";
import doctor_13 from "../../assets/img_doctors/doctor_133.png";
import Emergency from "../../assets/img_Departments/Emergency.jpg";
import Dermatology from "../../assets/img_Departments/Dermatology.webp";
import Pediatric from "../../assets/img_Departments/Pediatric.webp";
import Orthopedic from "../../assets/img_Departments/Orthopedic.jpg";
import Neurology from "../../assets/img_Departments/Neurology.jpg";

const Departments = [
  {
    id: 1,
    icon: "fa-solid fa-hospital",
    title: "departments.emergency.title",
    description: "departments.emergency.description",
    hero_img: Emergency,
    doctors: [
      {
        name: "Dr. Lisa Chen, MD",
        img: doctor_1,
        specialty: "Emergency Medicine Specialist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Michael Johnson, MD",
        img: doctor_2,
        specialty: "Emergency Medicine Specialist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Karen Lee, MD",
        img: doctor_3,
        specialty: "Emergency Medicine Specialist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Michelle Kim, MD",
        img: doctor_8,
        specialty: "Cardiologist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
    ],
    socialIcons: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
    ],
  },

  {
    id: 2,
    icon: "fa-solid fa-user-md",
    title: "departments.dermatology.title",
    description: "departments.dermatology.description",
    hero_img: Dermatology,
    doctors: [
      {
        name: "Dr. Alex Chen, MD",
        img: doctor_7,
        specialty: "Dermatologist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Rachel Green, MD",
        img: doctor_12,
        specialty: "Dermatologist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
    ],
    socialIcons: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
    ],
  },
  {
    id: 3,
    icon: "fa-solid fa-child",
    title: "departments.pediatric.title",
    description: "departments.pediatric.description",
    hero_img: Pediatric,
    doctors: [
      {
        name: "Dr. Sarah Patel, MD",
        img: doctor_4,
        specialty: "Pediatrician",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. David Nguyen, MD",
        img: doctor_5,
        specialty: "Board-certified Pediatrician",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Susan Bones, MD",
        img: doctor_6,
        specialty: "Pediatrician",
        experience:
          "With experience in managing complex medical conditions in children",
      },
    ],
    socialIcons: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
    ],
  },
  {
    id: 4,
    icon: "fa-solid fa-bone",
    title: "departments.orthopedic.title",
    description: "departments.orthopedic.description",
    hero_img: Orthopedic,
    doctors: [
      {
        name: "Dr. Robert Lee, MD",
        img: doctor_9,
        specialty: "Orthopedic Surgeon",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. Emma Wong, MD",
        img: doctor_10,
        specialty: "Orthopedic Surgeon",
        experience:
          "With experience in managing complex medical conditions in children",
      },
    ],
    socialIcons: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
    ],
  },
  {
    id: 5,
    icon: "fa-solid fa-brain",
    title: "departments.neurology.title",
    description: "departments.neurology.description",

    hero_img: Neurology,
    doctors: [
      {
        name: "Dr. Olivia Harris, MD",
        img: doctor_11,
        specialty: "Neurologist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
      {
        name: "Dr. James Wilson, MD",
        img: doctor_13,
        specialty: "Neurologist",
        experience:
          "With experience in managing complex medical conditions in children",
      },
    ],
    socialIcons: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
    ],
  },
];

export default Departments;