import { Link } from "react-router-dom";

function Book_Now() {
  return (
    <div className="container w-full m-auto bg-white rounded-xl shadow-[0px_0px_20px_3px_#307ac448] ">
      <form action="">
        <div className="grid gap-4 p-7 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 ">
          <div className="flex items-center gap-5">
            <div className="px-4 py-3 text-white rounded-full bg-secondary">
              <i className="text-2xl fa-solid fa-phone"></i>
            </div>
            <div className="">
              <label className="text-xl font-bold text-text_color">
                Hotline
              </label>
              <span className="block w-full py-2 text-sm text-Paragraph">
              123-456-7890
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="px-3 py-3 text-white rounded-full bg-secondary">
              <i className="text-2xl fa-solid fa-truck-medical"></i>
            </div>
            <div className="">
              <label className="text-xl font-bold text-text_color">Ambulance</label>
              <span className="block w-full py-2 text-sm text-Paragraph">
              876-256-876
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="px-5 py-3 text-white rounded-full bg-secondary">
              <i className="text-2xl fa-solid fa-location-dot"></i>
            </div>
            <div className="">
              <label className="text-xl font-bold text-text_color">Location</label>
              <span className="block w-full py-2 text-sm text-Paragraph">
              New York, US
              </span>
            </div>
          </div>
          <div className="items-center m-auto">
            <Link to="/appointments" type="button" className=" butt">
              Book Now →
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Book_Now;
