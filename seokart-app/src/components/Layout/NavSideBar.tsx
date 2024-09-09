"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import navItemsData from './navData.json';
import { usePathname } from 'next/navigation';

type Props = {}

interface NavbarItem {
    href: string;
    iconSrc: string;
    iconAlt: string;
    text: string;
    pathname?: string;
    dropdown?: DropdownItem[] | any;
}

interface DropdownItem {
    href: string;
    iconSrc: string;
    iconAlt: string;
    text: string;
    pathname?: string;
}

interface Logo {
    icon: string;
    fullLogo: string;
    link: string;
}


const NavbarItem: React.FC<NavbarItem> = ({ href, iconSrc, iconAlt, text, pathname }) => (
    <li >
        <a href={href} className={`${href === pathname ? 'active' : href==="/dashboard" && pathname === '/' ? 'active': ''}`}>
            <div className={`nav-icon`}>
                <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
            </div>
            <span className="nav-text">{text}</span>
        </a>
    </li>
);

const DropdownItem: React.FC<DropdownItem> = ({ href, iconSrc, iconAlt, text, pathname }) => (
    <li>
        <a href={href} className={`dropdown-item ${href === pathname ? 'active' : href==="/dashboard" && pathname === '/' ? 'active': ''}`}>
            <div className="nav-icon">
                <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
            </div>
            <span className="nav-text">{text}</span>
        </a>
    </li>
);

const NavSideBar: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname()
    return (
        <div className='sidebar'>
            <nav className='custom-navbar'>
                <ul>
                    <li className="nav-logo">
                        <a href={navItemsData.logo.link}>
                            <div className="logo-icon">
                                <Image width={40} height={40} src={navItemsData.logo.icon} alt="logo icon here" />
                            </div>
                            <div className="menu-hover-logo">
                                <Image width={179} height={40} src={navItemsData.logo.fullLogo} alt="full logo here" />
                            </div>
                        </a>
                    </li>
                    {
                        navItemsData?.items.map((item:any, index: number) => (
                            item?.dropdown ? (
                                <li key={index} className="relative">
                                    <div className="dropdown">
                                        <button
                                            className="flex gap-2 items-center w-full px-3 py-2 text-sm font-medium text-left  rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <div className="nav-icon url-editorMenu">
                                                <Image width={20} height={20} src={item.iconSrc} alt={item.iconAlt} />
                                            </div>
                                            <span className="nav-text">{item.text}</span>
                                            <svg
                                                className={`w-5 h-5 ml-auto transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isOpen && (
                                            <ul className="dropdown-menu absolute left-0 z-10 w-48 mt-2  ">
                                                {
                                                    item.dropdown.map((dropdownItem: any, dropdownIndex: number) => (
                                                        <DropdownItem
                                                            key={dropdownIndex}
                                                            href={dropdownItem.href}
                                                            iconSrc={dropdownItem.iconSrc}
                                                            iconAlt={dropdownItem.iconAlt}
                                                            text={dropdownItem.text}
                                                            pathname={pathname}
                                                        />
                                                    ))
                                                }
                                            </ul>
                                        )}

                                    </div>
                                </li>
                            ) : (
                                <NavbarItem
                                    key={index}
                                    href={item.href}
                                    iconSrc={item.iconSrc}
                                    iconAlt={item.iconAlt}
                                    text={item.text}
                                    pathname={pathname}
                                />
                            )
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavSideBar