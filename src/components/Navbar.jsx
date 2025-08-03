import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 text-white bg-blue-600 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">Doctor</Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
             <Link to="/" className="hover:text-gray-200">Home</Link>

          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
