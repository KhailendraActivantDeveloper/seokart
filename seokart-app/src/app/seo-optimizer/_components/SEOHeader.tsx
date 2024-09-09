import Image from 'next/image';
import React, { useState } from 'react';

const SEOHeader: React.FC = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="flex gap-3 seo-optimizer-headRight">
            <div className="custom-input flex-grow">
                <span>Name</span>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="custom-input flex-grow relative">
                <span>Target Keyword</span>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {/* Dropdown can be implemented here */}
            </div>
            <div className="optimizer-aiAssist relative inline-block text-left">
                <button aria-expanded="true" aria-haspopup="true" onClick={()=>setMenu(!menu)} className="custom-btn white-icon-btn  inline-flex items-center justify-between w-full px-4 py-2 font-medium text-sm leading-5 rounded-md ">
                    <Image src="images/ai-assist-icon.svg" alt="AI Assist" width={20} height={20} />
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                <div
                    className={`${!menu?"hidden":""} z-30 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                        >
                            Action
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                        >
                            Another action
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-2"
                        >
                            Something else here
                        </a>
                    </div>
                </div>
            </div>
            <button className="btn btn-default" type="button">
                <Image src="images/plus-icon.svg" alt="Plus" width={20} height={20} />
            </button>
        </div>
    );
};

export default SEOHeader;
