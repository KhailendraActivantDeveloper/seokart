import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label }) => {
  return (
    <div className="form-check flex items-center gap-2">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={id}
      />
      <label className="form-check-label text-sm" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
