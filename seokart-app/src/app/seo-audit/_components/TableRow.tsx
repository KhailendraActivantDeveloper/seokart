import { CustomButton } from '@/components/Button';
import Image from 'next/image';
import React from 'react';

interface TableRowProps {
  name: string;
  type: string;
  meta: number; // Adjust the possible values if needed
  content: number;
  image: number;
  broken: number;
  url: number;
  score: number;
}

const TableRow: React.FC<TableRowProps> = ({ name, type, meta, content, image, broken, url, score }) => {
  return (
    <tr className="border-b">
      <td className="p-2">
        {name}{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="images/link-icon.svg" alt="link-icon" width={20} height={20} className="inline-block w-4 h-4 ml-1" />
        </a>
      </td>
      <td className="p-2">{type}</td>
      <td className="p-2">
        <span
          className={`inline-block px-2 py-1 rounded ${
            meta === 0 ? 'bg-green-200' : meta === 1 ? 'bg-yellow-200' : 'bg-red-200'
          }`}
        >
          {meta}
        </span>
      </td>
      <td className="p-2">
        <span
          className={`inline-block px-2 py-1 rounded ${
            content === 0 ? 'bg-green-200' : content === 1 ? 'bg-yellow-200' : 'bg-red-200'
          }`}
        >
          {content}
        </span>
      </td>
      <td className="p-2">
        <span
          className={`inline-block px-2 py-1 rounded ${
            image === 0 ? 'bg-green-200' : image === 1 ? 'bg-yellow-200' : 'bg-red-200'
          }`}
        >
          {image}
        </span>
      </td>
      <td className="p-2">
        <span
          className={`inline-block px-2 py-1 rounded ${
            broken === 0 ? 'bg-green-200' : broken === 1 ? 'bg-yellow-200' : 'bg-red-200'
          }`}
        >
          {broken}
        </span>
      </td>
      <td className="p-2">
        <span
          className={`inline-block px-2 py-1 rounded ${
            url === 0 ? 'bg-green-200' : url === 1 ? 'bg-yellow-200' : 'bg-red-200'
          }`}
        >
          {url}
        </span>
      </td>
      <td className="p-2 text-right">
        <h2 className="text-lg font-bold mb-0">{score}%</h2>
      </td>
      <td className="p-2">
        <CustomButton text={"Optimize"} />
      </td>
    </tr>
  );
};

export default TableRow;
