
import React from 'react';

type Props = {};

const Loader: React.FC<Props> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-teal-400 border-t-gray-800 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
