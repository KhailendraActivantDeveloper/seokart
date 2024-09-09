import React from 'react';

type Props = {
    options: any;
    selected: string;
}

const Dropdown:React.FC<Props> = ({ options, selected }) => {
  return (
    <div className="custom-dropi without-labelDropi">
      <select className="block w-full bg-white border border-gray-300 rounded p-2" defaultValue={selected}>
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value} selected={option.value === selected}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
