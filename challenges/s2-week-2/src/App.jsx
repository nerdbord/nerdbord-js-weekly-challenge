import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Link = ({ number, text, image, position }) => {
  return (
    <div className="group">
      <a
        key={number}
        className="group flex text-gray-200 hover:text-black transition duration-300"
      >
        <span className="text-lg self-start">{number}</span>
        {text}
      </a>
      <img
        className={`aspect-auto w-72 absolute ${position} hidden group-hover:block transition`}
        src={image}
      />
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex w-screen h-screen justify-center items-center flex-col gap-8">
      <div className="flex gap-x-4 text-4xl uppercase font-semibold">
        <Link
          number="01"
          text="interiors"
          position="top-24 left-64"
          image="https://images.pexels.com/photos/17823726/pexels-photo-17823726/free-photo-of-kitten-girls-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Link
          number="02"
          text="brand identity"
          position="top-12 right-16"
          image="https://images.pexels.com/photos/11013334/pexels-photo-11013334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Link
          number="03"
          text="visual"
          position="bottom-24 left-8"
          image="https://images.pexels.com/photos/17601814/pexels-photo-17601814/free-photo-of-light-city-road-traffic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="flex gap-x-4 text-4xl uppercase font-semibold">
        <Link
          number="04"
          text="animation"
          position="top-2 right-8"
          image="https://images.pexels.com/photos/17843264/pexels-photo-17843264/free-photo-of-tuntun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Link
          number="05"
          text="bunch"
          position="top-12 left-2"
          image="https://images.pexels.com/photos/16932144/pexels-photo-16932144/free-photo-of-cut-in-half-coconut-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Link
          number="06"
          text="rumors"
          position="top-48 left-12"
          image="https://images.pexels.com/photos/16059685/pexels-photo-16059685/free-photo-of-drone-shot-of-mountains-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}

export default App;
