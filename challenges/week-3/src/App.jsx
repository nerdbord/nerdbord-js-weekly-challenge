import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import { motion } from "framer-motion";

function App() {
  const [state, setState] = useState(false);

  const clickHandler = () => {
    setState((prevState) => !prevState);
  };

  return (
    <motion.div
      transition={2}
      className={`${
        state ? "bg-black/60" : ""
      } h-screen flex justify-center items-center transition-all`}
    >
      <motion.div
        whileTap={{
          scaleX: 1.6,
          scaleY: 1.2,
        }}
        className={`flex justify-center items-center flex-col gap-y-4 h-fit p-16 px-32 ${
          state ? " bg-white" : ""
        }`}
      >
        <motion.p
          transition={0.5}
          className={`${state ? "w-72 font-bold" : "w-48"} text-center text-lg`}
        >
          {state
            ? `Wow bouncy! Now, let's wrap it up and close me back.`
            : "Pop me up like one of your bubble wraps."}
        </motion.p>
        <Button
          onClick={clickHandler}
          text={state ? "LET'S CLOSE" : "POP IT!"}
        />
      </motion.div>
    </motion.div>
  );
}

export default App;
