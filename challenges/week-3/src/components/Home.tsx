"use client"

import { useState  } from 'react';
import Modal         from './Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <article className="py-6 px-12">Pop me up like one of your bubble wraps.</article>
      <button
        className="bg-blue-800 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        POP IT!
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;


