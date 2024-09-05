import React from 'react';

type Props = {
  setRoute?: (route: string) => void;
}

const RegisterSuccess: React.FC<Props> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your account has been successfully created. You can now log in with your credentials.
        </p>
        <a
          href="/login"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default RegisterSuccess;
