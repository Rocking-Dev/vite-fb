import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const overlay = isOpen && (
    <div
      onClick={onClose}
      className="absolute z-10 left-0 top-0 h-full w-full bg-black opacity-50"
    ></div>
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 w-64 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <h2 className="text-xl font-semibold m-4">Navbar</h2>
          <ul>
            {["Home", "Countries", "Settings", "Help"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-gray-800 hover:text-primary"
              >
                <li className="flex items-center h-12 pl-4 hover:bg-gray-400">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          <X className="cursor-pointer" />
        </button>
      </div>

      {overlay}
    </>
  );
};

export default Drawer;
