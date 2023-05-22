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
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        POP IT!
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;


