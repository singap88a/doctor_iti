// src/data/tracksData.js

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

const tracksData = [
  {
    id: 1,
    Department: "Emergency Department",
    title: "Dr. Lisa Chen, MD",
    Job: "Emergency Medicine Specialist",
    category: "Emergency",
    description:
      "Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine. She has a special interest in critical care and trauma management.",
    image: doctor_1,
    contactInfo: {
      phone: "+1-800-123-4567",
      email: "dr.chen@hospital.com",
    },
    appointmentSchedules: [
      { day: "Wednesday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "11:00 AM - 4:00 PM" },
      { day: "Friday", time: "2:00 PM - 5:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Harvard Medical School", year: "2010" },
      {
        degree: "Board Certified in Emergency Medicine",
        institution: "American Board of Emergency Medicine",
        year: "2012",
      },
    ],
    experiences: [
      {
        position: "Emergency Medicine Specialist",
        hospital: "General Hospital",
        years: "10",
      },
      {
        position: "Attending Physician",
        hospital: "City Emergency Care",
        years: "3",
      },
    ],
    awards: [
      { award: "Emergency Medicine Excellence Award", year: "2018" },
      { award: "Best Medical Practitioner", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 2,
    Department: "Emergency Department",
    title: "Dr. Michael Johnson, MD",
    Job: "Emergency Medicine Specialist",
    category: "Emergency",
    description:
      "Dr. Johnson is a highly experienced emergency medicine physician with over 15 years of experience. He is board-certified in emergency medicine and has a special interest in disaster management.",
    image: doctor_2,
    contactInfo: {
      phone: "+1-800-234-5678",
      email: "dr.johnson@hospital.com",
    },
    appointmentSchedules: [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "3:00 PM - 6:00 PM" },
      { day: "Saturday", time: "11:00 AM - 2:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Johns Hopkins University", year: "2005" },
      {
        degree: "Board Certified in Emergency Medicine",
        institution: "American Board of Emergency Medicine",
        year: "2007",
      },
    ],
    experiences: [
      {
        position: "Senior Emergency Physician",
        hospital: "St. Mary's Medical Center",
        years: "10",
      },
      {
        position: "Emergency Department Director",
        hospital: "City General Hospital",
        years: "5",
      },
    ],
    awards: [
      { award: "Excellence in Emergency Care", year: "2017" },
      { award: "Distinguished Service Award", year: "2019" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 3,
    Department: "Emergency Department",
    title: "Dr. Karen Lee, MD",
    Job: "Emergency Medicine Specialist",
    category: "Emergency",
    description:
      "Dr. Lee is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. She is board-certified in emergency medicine and has a special interest in cardiac care.",
    image: doctor_3,
    contactInfo: {
      phone: "+1-800-345-6789",
      email: "dr.lee@hospital.com",
    },
    appointmentSchedules: [
      { day: "Wednesday", time: "8:00 AM -9:00 AM " },
      { day: "Thursday", time: "8:00 AM - 11:00 AM " },
      { day: "Saturday", time: "9:00 AM - 8:00 AM" },
    ],
    degrees: [
      { degree: "MD", institution: "Stanford University", year: "2006" },
      {
        degree: "Board Certified in Emergency Medicine",
        institution: "American Board of Emergency Medicine",
        year: "2008",
      },
    ],
    experiences: [
      {
        position: "Emergency Physician",
        hospital: "Sunnydale Hospital",
        years: "8",
      },
      {
        position: "Cardiac Emergency Specialist",
        hospital: "City Heart Center",
        years: "5",
      },
    ],
    awards: [
      { award: "Top Emergency Physician", year: "2019" },
      { award: "Best Cardiac Care Award", year: "2021" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 4,
    Department: "Pediatric Department",
    title: "Dr. Sarah Patel, MD",
    Job: "Pediatrician",
    category: "Pediatric",
    description:
      "Dr. Patel is a compassionate pediatrician with over 15 years of experience. She is board-certified in pediatrics and has a special interest in preventive care and childhood development.",
    image: doctor_4,
    contactInfo: {
      phone: "+1-800-456-7890",
      email: "dr.patel@hospital.com",
    },
    appointmentSchedules: [
      { day: "Wednesday", time: "9:00 AM - 12:00 AM" },
      { day: "Wednesday", time: "1:00 PM - 4:00 AM" },
      { day: "Friday", time: "2:00 PM - 5:00 AM" },
    ],
    degrees: [
      { degree: "MD", institution: "University of California", year: "2007" },
      {
        degree: "Board Certified in Pediatrics",
        institution: "American Board of Pediatrics",
        year: "2009",
      },
    ],
    experiences: [
      {
        position: "Pediatrician",
        hospital: "Children's Hospital",
        years: "10",
      },
      {
        position: "Pediatric Consultant",
        hospital: "City Health Center",
        years: "5",
      },
    ],
    awards: [
      { award: "Top Pediatrician Award", year: "2018" },
      { award: "Best Pediatric Care", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 5,
    Department: "Pediatric Department",
    title: "Dr. David Nguyen, MD",
    Job: "Board-certified Pediatrician",
    category: "Pediatric",
    description:
      "Dr. Nguyen is a highly skilled pediatrician with expertise in the treatment of common childhood illnesses and conditions. She is board-certified in pediatrics.",
    image: doctor_5,
    contactInfo: {
      phone: "+1-800-567-8901",
      email: "dr.nguyen@hospital.com",
    },
    appointmentSchedules: [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "3:00 PM - 6:00 PM" },
      { day: "Saturday", time: "11:00 AM - 2:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "University of Michigan", year: "2010" },
      {
        degree: "Board Certified in Pediatrics",
        institution: "American Board of Pediatrics",
        year: "2012",
      },
    ],
    experiences: [
      {
        position: "Pediatrician",
        hospital: "Greenwood Children's Hospital",
        years: "8",
      },
      {
        position: "Pediatric Specialist",
        hospital: "Sunny Meadows Clinic",
        years: "5",
      },
    ],
    awards: [
      { award: "Pediatric Excellence Award", year: "2017" },
      { award: "Outstanding Pediatrician", year: "2019" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 6,
    Department: "Pediatric Department",
    title: "Dr. Susan Bones, MD",
    Job: "Pediatrician",
    category: "Pediatric",
    description:
      "Dr. Bones is a dedicated pediatrician with a focus on providing comprehensive care to children of all ages. He is board-certified in pediatrics and has a special interest in childhood obesity.",
    image: doctor_6,
    contactInfo: {
      phone: "+1-800-678-9012",
      email: "dr.bones@hospital.com",
    },
    appointmentSchedules: [
      { day: "Wednesday", time: "9:00 AM - 12:00 PM" },
      { day: "Tuesday", time: "1:00 PM - 4:00 PM" },
      { day: "Friday", time: "10:00 AM - 1:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Yale University", year: "2011" },
      {
        degree: "Board Certified in Pediatrics",
        institution: "American Board of Pediatrics",
        year: "2013",
      },
    ],
    experiences: [
      {
        position: "Pediatrician",
        hospital: "Children's Health Clinic",
        years: "8",
      },
      {
        position: "Resident Pediatrician",
        hospital: "Yale Children's Hospital",
        years: "2",
      },
    ],
    awards: [
      { award: "Excellence in Pediatric Care", year: "2019" },
      { award: "Top Pediatrician", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 7,
    Department: "Dermatology Department",
    title: "Dr. Alex Chen, MD",
    Job: "Dermatologist",
    category: "Dermatology",
    description:
      "Dr. Chen is a highly skilled dermatologist with extensive experience in diagnosing and treating various skin conditions, including acne, eczema, and skin cancer. He specializes in both medical and cosmetic dermatology, offering personalized care to his patients.",
    image: doctor_7,
    contactInfo: {
      phone: "+1-800-789-0123",
      email: "dr.chen@hospital.com",
    },
    appointmentSchedules: [
      { day: "Tuesday", time: "10:00 AM - 1:00 AM" },
      { day: "Wednesday", time: "2:00 PM - 5:00 AM" },
      { day: "Friday", time: "9:00 AM - 12:00 AM" },
    ],
    degrees: [
      { degree: "MD", institution: "University of Chicago", year: "2010" },
      {
        degree: "Board Certified in Dermatology",
        institution: "American Board of Dermatology",
        year: "2012",
      },
    ],
    experiences: [
      {
        position: "Dermatologist",
        hospital: "SkinCare Medical Center",
        years: "8",
      },
      {
        position: "Dermatology Fellow",
        hospital: "Chicago Skin Institute",
        years: "4",
      },
    ],
    awards: [
      { award: "Best Dermatologist", year: "2019" },
      { award: "Excellence in Dermatology Care", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },

  {
    id: 8,
    Department: "Emergency Department",
    title: "Dr. Michelle Kim, MD",
    Job: "Cardiologist",
    category: "Emergency",
    description:
      "Dr. Kim is a renowned cardiologist with over 20 years of experience in treating cardiovascular conditions. She is board-certified in cardiology and has a passion for both clinical care and research.",
    image: doctor_8,
    contactInfo: {
      phone: "+1-800-890-1234",
      email: "dr.kim@hospital.com",
    },
    appointmentSchedules: [
      { day: "Wednesday", time: "11:00 AM - 12:00 AM" },
      { day: "Friday", time: "2:00 PM - 5:00 AM" },
      { day: "Friday", time: "10:00 AM - 1:00 M" },
    ],
    degrees: [
      { degree: "MD", institution: "Columbia University", year: "2002" },
      {
        degree: "Board Certified in Cardiology",
        institution: "American Board of Cardiology",
        year: "2004",
      },
    ],
    experiences: [
      {
        position: "Cardiologist",
        hospital: "New York Heart Institute",
        years: "15",
      },
      {
        position: "Cardiology Researcher",
        hospital: "Columbia University Medical Center",
        years: "5",
      },
    ],
    awards: [
      { award: "Best Cardiologist of the Year", year: "2017" },
      { award: "Top Cardiovascular Researcher", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 9,
    Department: "Orthopedic Department",
    title: "Dr. Robert Lee, MD",
    Job: "Orthopedic Surgeon",
    category: "Orthopedic",
    description:
      "Dr. Lee is a highly experienced orthopedic surgeon with a special interest in joint replacement and sports medicine. He has over 15 years of experience and is board-certified in orthopedic surgery.",
    image: doctor_9,
    contactInfo: {
      phone: "+1-800-901-2345",
      email: "dr.lee@hospital.com",
    },
    appointmentSchedules: [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "2:00 PM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" },
    ],
    degrees: [
      {
        degree: "MD",
        institution: "University of California, Los Angeles",
        year: "2005",
      },
      {
        degree: "Board Certified in Orthopedic Surgery",
        institution: "American Board of Orthopedic Surgery",
        year: "2007",
      },
    ],
    experiences: [
      {
        position: "Orthopedic Surgeon",
        hospital: "Los Angeles Sports Clinic",
        years: "10",
      },
      {
        position: "Orthopedic Resident",
        hospital: "UCLA Medical Center",
        years: "4",
      },
    ],
    awards: [
      { award: "Top Orthopedic Surgeon", year: "2019" },
      { award: "Excellence in Sports Medicine", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },

  {
    id: 10,
    Department: "Orthopedic Department",
    title: "Dr. Emma Wong, MD",
    Job: "Orthopedic Surgeon",
    category: "Orthopedic",
    description:
      "Dr. Wong is a skilled orthopedic surgeon specializing in spine surgery and trauma care. With over 12 years of experience, she is dedicated to providing advanced treatment options for musculoskeletal disorders.",
    image: doctor_10,
    contactInfo: {
      phone: "+1-800-123-7890",
      email: "dr.wong@hospital.com",
    },
    appointmentSchedules: [
      { day: "Monday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "1:00 PM - 4:00 PM" },
      { day: "Friday", time: "10:00 AM - 1:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Stanford University", year: "2008" },
      {
        degree: "Board Certified in Orthopedic Surgery",
        institution: "American Board of Orthopedic Surgery",
        year: "2010",
      },
    ],
    experiences: [
      {
        position: "Orthopedic Surgeon",
        hospital: "San Francisco Spine Center",
        years: "8",
      },
      {
        position: "Orthopedic Resident",
        hospital: "Stanford Medical Center",
        years: "4",
      },
    ],
    awards: [
      { award: "Best Spine Surgeon", year: "2017" },
      { award: "Excellence in Orthopedic Surgery", year: "2020" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 11,
    Department: "Neurology Department",
    title: "Dr. Olivia Harris, MD",
    Job: "Neurologist",
    category: "Neurology",
    description:
      "Dr. Harris is a highly experienced neurologist specializing in the diagnosis and treatment of neurological disorders such as epilepsy, Alzheimer's, and Parkinson's disease.",
    image: doctor_11,
    contactInfo: {
      phone: "+1-800-234-5678",
      email: "dr.harris@hospital.com",
    },
    appointmentSchedules: [
      { day: "Tuesday", time: "9:00 AM - 12:00 PM" },
      { day: "Tuesday", time: "2:00 PM - 8:00 AM" },
      { day: "Thursday", time: "1:00 PM - 4:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Johns Hopkins University", year: "2012" },
      {
        degree: "Board Certified in Neurology",
        institution: "American Board of Neurology",
        year: "2014",
      },
    ],
    experiences: [
      {
        position: "Neurologist",
        hospital: "Neurology Care Center",
        years: "6",
      },
      {
        position: "Neurology Fellow",
        hospital: "Johns Hopkins Hospital",
        years: "3",
      },
    ],
    awards: [
      { award: "Best Neurologist", year: "2019" },
      { award: "Excellence in Neurology Research", year: "2021" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 12,
    Department: "Dermatology Department",
    title: "Dr. Rachel Green, MD",
    Job: "Dermatologist",
    category: "Dermatology",
    description:
      "Dr. Green is a board-certified dermatologist with over 10 years of experience treating various skin conditions. She specializes in cosmetic dermatology and skin cancer prevention.",
    image: doctor_12,
    contactInfo: {
      phone: "+1-800-345-6789",
      email: "dr.green@hospital.com",
    },
    appointmentSchedules: [
      { day: "Monday", time: "8:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "1:00 PM - 4:00 PM" },
      { day: "Friday", time: "9:00 AM - 12:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "New York University", year: "2009" },
      {
        degree: "Board Certified in Dermatology",
        institution: "American Board of Dermatology",
        year: "2011",
      },
    ],
    experiences: [
      {
        position: "Dermatologist",
        hospital: "SkinCare Medical Center",
        years: "8",
      },
      {
        position: "Dermatology Resident",
        hospital: "NYU Langone Health",
        years: "4",
      },
    ],
    awards: [
      { award: "Top Dermatologist", year: "2019" },
      { award: "Excellence in Skin Cancer Prevention", year: "2021" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
  {
    id: 13,
    Department: "Neurology Department",
    title: "Dr. James Wilson, MD",
    Job: "Neurologist",
    category: "Neurology",
    description:
      "Dr. Wilson is a highly experienced neurologist specializing in the diagnosis and treatment of neurological disorders such as epilepsy, Alzheimer's, and Parkinson's disease.",
    image: doctor_13, // يمكنك تغيير الصورة هنا
    contactInfo: {
      phone: "+1-800-234-5678",
      email: "dr.wilson@hospital.com",
    },
    appointmentSchedules: [
      { day: "Thursday", time: "9:00 AM - 12:00 PM" },
      { day: "Tuesday", time: "2:00 PM - 5:00 PM" },
      { day: "Thursday", time: "1:00 PM - 4:00 PM" },
    ],
    degrees: [
      { degree: "MD", institution: "Harvard Medical School", year: "2010" },
      {
        degree: "Board Certified in Neurology",
        institution: "American Board of Neurology",
        year: "2012",
      },
    ],
    experiences: [
      { position: "Neurologist", hospital: "Neurology Institute", years: "7" },
      {
        position: "Neurology Fellow",
        hospital: "Harvard Medical Center",
        years: "4",
      },
    ],
    awards: [
      { award: "Top Neurologist", year: "2020" },
      { award: "Best Neurology Research", year: "2022" },
    ],
    icon: [
      { iconClass: "fa-brands fa-facebook" },
      { iconClass: "fa-brands fa-linkedin" },
      { iconClass: "fa-brands fa-twitter" },
      { iconClass: "fa-brands fa-whatsapp" },
    ],
  },
];

export default tracksData;
