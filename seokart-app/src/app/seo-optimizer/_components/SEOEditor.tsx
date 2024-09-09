import Image from 'next/image';
import React, { useState } from 'react';

const SEOEditor: React.FC = () => {
    const [menu, setMenu] = useState(false)

    return (
        <div className="card seoOptimizer-right flex-grow">
            <div className="grid gap-x-6">
                <div className="md:grid-cols-12 mb-22">
                    <div className="flex gap-3 items-end">
                        <div className="custom-input flex-grow">
                            <span>Title Tag</span>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button className="custom-btn white-icon-btn" type="button">
                            <Image src="images/ai-assist-icon.svg" alt="AI Assist" width={20} height={20} />
                        </button>
                    </div>
                </div>
                <div className="md:grid-cols-12 mb-6">
                    <div className="flex gap-3 items-end">
                        <div className="custom-textarea flex-grow">
                            <span className="textarea-heading">Meta Description</span>
                            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 height110"></textarea>
                        </div>
                        <button className="custom-btn white-icon-btn" type="button">
                            <Image src="images/ai-assist-icon.svg" alt="AI Assist" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="ai-useArea">
                <div className="flex gap-3">
                    <div className="flex-grow">
                        <p className="mb-0">Discover our stunning collection of 14k Interlinked Earrings, beautifully crafted for elegance and style. Shop now for the perfect accessory.</p>
                    </div>

                    <button type="button" className="custom-btn">
                        use it
                    </button>
                </div>
            </div>
            <div className="optimizer-restoreArea">
                <div className="optimizer-aiAssist relative inline-block">
                    <button className="btn btn-default flex gap-2 dropdown-toggle" onClick={() => setMenu(!menu)} type="button" aria-expanded="true" aria-haspopup="true">
                        <Image src="images/restore-icon.svg" alt="restore-icon" width={20} height={20} /> Restore
                    </button>
                    <div
                        className={`${!menu ? "hidden" : ""} z-30 origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                    >
                        <div className="py-1 px-4" role="none">
                            <a
                                href="#"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Title Tag (2024-03-20 10:44:08)
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 block py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Title Tag (2023-11-23 10:24:28)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOEditor;
