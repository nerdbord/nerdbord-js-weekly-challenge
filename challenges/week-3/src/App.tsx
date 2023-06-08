import { Button } from "./components/Button";
import { useRef, useState } from "react";
import css from "./App.module.css";
function App() {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    refDialog.current?.showModal();
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
    setTimeout(() => {
      refDialog.current?.close();
    }, 300);
  };

  return (
    <>
      <div className={css.container}>
        <h4>Pop me up like one of your bubble wraps.</h4>
        <Button onClick={openDialog}>OPEN ME UP</Button>
        <dialog
          ref={refDialog}
          className={`${css.dialog} ${isOpen ? css.open : css.closed}`}
        >
          <div className={css.dialogContainer}>
            <h4> Wow, bouncy! Now, let’s wrap it up and close me back.</h4>
            <Button onClick={closeDialog}>LET’S close</Button>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default App;
