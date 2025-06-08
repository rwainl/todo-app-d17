import React from 'react'

function ModalKonfirmasi({ isOpen, onClose, onConfirm, message }) {
    if (!isOpen) return null;
    
    return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <p className='mb-4 text-gray-800'>{message}</p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300 ease-in-out'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className='px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out'
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalKonfirmasi