import { useEffect, useRef } from 'react';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded shadow-lg p-6 transform transition-all duration-300"
      >
        <h2 className="text-lg font-bold mb-4">Modal Content</h2>
        <p>This is the modal content.</p>
        <button
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          LET'S CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
