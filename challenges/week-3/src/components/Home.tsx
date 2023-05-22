'use client'

import { useState } from 'react'
import Modal        from './Modal'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <article className="py-6 px-12 text-center">
        <p>Pop me up like one of your</p>
        <p>bubble wraps.</p>
      </article>
      <button
        className="bg-purple-500 hover:bg-purple-200 text-white font-bold py-2 px-4 rounded-full"
        onClick={openModal}
      >
        <p className="text-center py-2 px-4">POP IT!</p>
      </button>
      {isModalOpen && <Modal closeModal={closeModal}/>}
    </div>
  )
}

export default Home


