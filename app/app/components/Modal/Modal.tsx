"use client";

import { forwardRef, useImperativeHandle, useState } from "react";

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal = forwardRef(({ children }: ModalProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  const handleCloseModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#2a3042] bg-opacity-75 z-50"
      onClick={handleCloseModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = "Modal";
