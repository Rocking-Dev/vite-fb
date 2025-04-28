import React from "react";

interface AeonsButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const IconButton: React.FC<AeonsButtonProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center h-12 w-12 rounded-full bg-white hover:bg-gray-400 hover:cursor-pointer"
    >
      {children}
    </div>
  );
};

export default IconButton;
