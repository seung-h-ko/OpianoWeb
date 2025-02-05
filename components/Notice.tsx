import React from 'react';

interface NoticeProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Notice = ({ isOpen, onClose, children }: NoticeProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
            {children}
      </div>
    </div>
  );
};

export default Notice;
