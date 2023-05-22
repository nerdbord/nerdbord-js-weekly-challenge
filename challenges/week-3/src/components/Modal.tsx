import { useEffect, useRef } from 'react'

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node))
    {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 m-2 ">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 flex flex-col"
      >
        <p className="text-center">Wow, bouncy!</p>
        <p className="text-center"> Now, let’s wrap it up and close me back.</p>
        <button
          className="mt-4 bg-purple-500 hover:bg-purple-200 text-white font-bold py-2 px-4 rounded-full"
          onClick={closeModal}
        >
          <p className="text-center py-2 px-4">LET'S CLOSE</p>
        </button>
      </div>
    </div>
  )
}

export default Modal
