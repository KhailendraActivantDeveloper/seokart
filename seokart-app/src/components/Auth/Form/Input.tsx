'use client';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type Props = {
    id?: string;
    label?: string;
    linkLabel?: string;
    labelLink?: string;
    name?: string;
    type?: string;
    value?: string | number;
    onChange?: any;
    placeholder?: string;
    required?: boolean;
    errors?: any;
    touched?: any;
}

const Input: React.FC<Props> = ({ id, label, labelLink, linkLabel, name, type, value, onChange, placeholder, required, errors, touched }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            {
                label && linkLabel ? (
                    <div className="flex items-center justify-between">
                        <label htmlFor={name} className={"block text-sm font-medium leading-6 text-gray-900"}>{label}</label>
                        <div className="text-sm">
                            <a href={labelLink} className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}>{linkLabel}</a>
                        </div>
                    </div>
                ) : label ? <label htmlFor="email" className={"block text-sm font-medium leading-6 text-gray-900"}>{label}</label> : linkLabel ? (
                    <div className="flex items-center justify-between">
                        <label htmlFor={name} className={"block text-sm font-medium leading-6 text-gray-900"}></label>
                        <div className="text-sm">
                            <a href={labelLink} className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}>{linkLabel}</a>
                        </div>
                    </div>
                ) : <></>
            }

            <div className="mt-2">
                {
                    type === "password" ? (
                        <div className='relative'>
                            <input id={id} name={name} type={!show ? "password" : "text"} required={required} className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors && touched && "border-red-500"}`} value={value} onChange={onChange} placeholder={placeholder} />
                            {
                                type === "password" && !show ? (
                                    <AiOutlineEyeInvisible
                                        className='absolute bottom-2.5 right-2 z-1 cursor-pointer'
                                        size={20}
                                        onClick={() => setShow(true)}
                                    />
                                ) : (
                                    <AiOutlineEye
                                        className='absolute bottom-2.5 right-2 z-1 cursor-pointer'
                                        size={20}
                                        onClick={() => setShow(false)}
                                    />
                                )
                            }
                        </div>
                    ) : (
                        <input id={id} name={name} type={type} required={required} className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors && touched && "border-red-500"}`} value={value} onChange={onChange} placeholder={placeholder} />
                    )
                }

                {
                    errors && touched && (
                        <span className="text-red-500 pt-2 block">{errors}</span>
                    )
                }

            </div>
        </div>
    )
}

export default Input