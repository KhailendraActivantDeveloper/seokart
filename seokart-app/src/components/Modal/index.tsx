'use client'
import React, { useState, useEffect } from 'react';

type Props = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: (e?: any) => void;
}

const Modal: React.FC<Props> = ({ title, children, isOpen, onClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            setTimeout(() => setFadeIn(true), 10);
            document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
        } else {
            setShowModal(false);
            setTimeout(() => setFadeIn(false), 300);
            document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
        }
    }, [isOpen]);

    return (
        <>
            {showModal && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 rounded-lg transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-700"
                        onClick={onClose}
                    />
                    <div
                        className="relative bg-white rounded-2xl shadow-lg max-w-3xl w-full transition-transform duration-700 transform-gpu 
                        ease-out scale-100 "
                    >
                        <div className="modal-header flex justify-between items-center">
                            <h1 className="text-lg font-semibold">{title}</h1>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-800"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body space-y-4 max-h-[85vh] overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
