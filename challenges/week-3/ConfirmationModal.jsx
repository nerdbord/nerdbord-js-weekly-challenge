import React, { useState } from "react";
import css from "./ConfirmationModal.module.css";

export const ConfirmationModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopModalOpen, setPopModalOpen] = useState(false)
  //const [animation, setAnimation] = useState(`bounceInFwd`)

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleOpenPop = () => {
    setPopModalOpen(true)
  }

  const handleClosePop = () => {
    setPopModalOpen(false)
  }

/*   const handleClosePop = () => {
    setAnimation("bounceInFwdReverse");
    setTimeout(() => {
      setPopModalOpen(false);
      setTimeout(() => {
        setAnimation("bounceInFwd");
        setModalOpen(true);
      }, 1000); 
    }, 2000); 
  };
   */

  return (
    <>
      {!isModalOpen && (
        <button className={css.modalBtn} onClick={handleOpenModal}>
          open me up
        </button>
      )}
      {isModalOpen && (
        <>
          {!isPopModalOpen&&isModalOpen ? (
            <div className={css.popUpModal1}>
              Pop me up like one of your <br /> bubble wraps.
              <button className={css.modalBtn} onClick={handleOpenPop}>
                POP IT!
              </button>
            </div>
          ) : (
            <>
            <div className={css.overlay}></div>
            <div className={`${css.popUpModal2} ${css.bounceInFwd}`}>
              Wow, bouncy!<br />Now, let's wrap it up and close me back.
              <button className={css.modalBtn} onClick={handleClosePop}>
                LET'S CLOSE
              </button>
            </div>
            </>
          )}
        </>
      )}
    </>
  );
  
};


  