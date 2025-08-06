import { Link } from "react-router-dom";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const Book_Now = memo(() => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: "fa-solid fa-phone",
      label: t("book_now.hotline"),
      value: t("book_now.hotline_number"),
      ariaLabel: "Hotline number",
    },
    {
      icon: "fa-solid fa-truck-medical",
      label: t("book_now.ambulance"),
      value: t("book_now.ambulance_number"),
      ariaLabel: "Ambulance number",
    },
    {
      icon: "fa-solid fa-location-dot",
      label: t("book_now.location"),
      value: t("book_now.location_address"),
      ariaLabel: "Location address",
    },
  ];

  return (
    <section className="container w-full m-auto bg-white rounded-xl shadow-[0px_0px_20px_3px_#307ac448]">
      <form action="">
        <div className="grid gap-4 p-7 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="px-4 py-3 text-white rounded-full bg-secondary">
                <i className={`text-2xl ${info.icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <label className="text-xl font-bold text-text_color">
                  {info.label}
                </label>
                <span
                  className="block w-full py-2 text-sm text-Paragraph"
                  aria-label={info.ariaLabel}
                >
                  {info.value}
                </span>
              </div>
            </div>
          ))}
          <div className="items-center m-auto">
            <Link
              to="/appointments"
              type="button"
              className="butt"
              aria-label="Book an appointment"
            >
              {t("book_now.book_now")} →
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
});

Book_Now.displayName = "Book_Now";

export default Book_Now;
