import React from 'react';
import { createPortal } from 'react-dom';
import cross from '../../assets/form/cross.png';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur">
      {/* Modal Container */}
      <div
        className="w-[40rem]  rounded-xl shadow-md "
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        {/* Close Button */}
        <div className="absolute ml-[37rem] mt-[8px] cursor-pointer">
          <img src={cross} alt="Close" onClick={onClose} className="w-10 h-10" />
        </div>

        {/* Modal Content */}
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
