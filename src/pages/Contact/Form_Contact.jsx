import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";


export default function Form_Contact() {
  const { t } = useTranslation();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    //checked if fieldes empty or no
    if (Name === "" || Email === "" || Subject === "" || Message === "") {
      toast.error(t("contact.form.error_message"), {
        position: "top-center",
        autoClose: 4000,
      });
      return;
    }


    //send data
    console.log("Form Submittes ", { Name, Email, Subject, Message });


    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    //show sucess message
    toast.success(t("contact.form.success_message"), {
      autoClose: 4000,
    });
  };


  return (
    <div className='container'>
      <form
        onSubmit={handleSubmit}
        action=""
        className='w-full md:w-[60%] mx-auto p-5 md:p-10 rounded-lg  shadow-[0px_0px_20px_1px_#307ac448]'>
        <div className='flex flex-wrap justify-between gap-6 md:flex-nowrap'>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label htmlFor='Name' className='text-text_color'>
              {t("contact.form.name")}
            </label>
            <input type='text' id='Name' placeholder={t("contact.form.name_placeholder")} name='name'
              className='w-full px-4 py-3 border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label htmlFor='Email' className='text-text_color'>
              {t("contact.form.email")}
            </label>
            <input type='email' id='Email' placeholder={t("contact.form.email_placeholder")} name='email'
              className='w-full px-4 py-3 border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <label htmlFor='Subject' className='text-text_color'>
            {t("contact.form.subject")}
          </label>
          <input type='text' id='Subject' name='subject' placeholder={t("contact.form.subject_placeholder")}
            className='w-full px-4 py-3 border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e) => setSubject(e.target.value)}
            value={Subject}
          />
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <label htmlFor='text' className='text-text_color' >{t("contact.form.message")}</label>
          <textarea type='text' id='Message' name='message' placeholder={t("contact.form.message_placeholder")}
            className='w-full px-4 py-3 border rounded-lg resize-none border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e) => setMessage(e.target.value)}
            value={Message}
          >
          </textarea>
        </div>
        <div className='mt-6'>
          <button type='submit' className='butt'>
            {t("contact.form.submit")}
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer />

    </div>
  )
}