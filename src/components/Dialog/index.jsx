import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export default function Dialog({ isOpen, onClose, children }) {


  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="close-btn-wrapper">
          <button 
            autoFocus 
            onClick={onClose}
            className="close-btn"
            >
            <IconClose />
          </button>
        </div>

        {children}
      </dialog>
    </>
  );
}
