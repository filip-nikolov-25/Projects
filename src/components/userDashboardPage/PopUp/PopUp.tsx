import React from "react";

interface PopupProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isActive, onClose, children }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white p-10 rounded-lg shadow-lg  w-1/2">
        <button
          onClick={onClose}
          className="absolute top-6 right-12 text-5xl hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
