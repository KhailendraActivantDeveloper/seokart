import { useActivationMutation } from '@/redux/features/auth/authApi';
import Heading from '@/utils/Heading';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

type Props = {
    setRoute: (route: string) => void;
}

type VerifyNumber = {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
}


const Verification:React.FC<Props> = ({setRoute}) => {
    const { token } = useSelector((state: any) => state.auth);
    const [loading, setLoading] = useState(false);
    const [activation, { isError, data, isSuccess, isLoading, error }] = useActivationMutation();

    useEffect(() => {
        if (isSuccess) {
            const message = "Account activated successfully!";
            toast.success(message);
              setRoute("success");
        }
        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                toast.error(errorData.data.message);
                setInvalidError(true)
            } else {
                toast.error(`An error occured ${error}`);
            }
            setRoute("register");
        }
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
        // if(isError){
        //   toast.error("something wents wrong");
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, error, isLoading]);

    const [invalidError, setInvalidError] = useState<boolean>(false);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    })

    const verificationHandler = async () => {
        const verificationNumber = Object.values(verifyNumber).join("");
        if (verificationNumber.length !== 4) {
            setInvalidError(true)
            return;
        }
        await activation({
            activation_token: token,
            activation_code: verificationNumber,
        });
    };

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value }
        setVerifyNumber(newVerifyNumber);

        if (value === "" && index > 0) {
            inputRefs[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    }
    return (
        <>
        <Heading
            title={"Verification Page"}
        />
        <div className="h-screen">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image width={80} height={80} className="mx-auto" src="images/logo-icon.svg" alt="Your Company" />
                    <h2 className={"mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}>Sign up to your account</h2>
                    <div className=" m-auto flex items-center justify-around">
                        {
                            Object.keys(verifyNumber).map((key, index) => (
                                <input
                                    type='number'
                                    placeholder=''
                                    title='verify'
                                    key={key}
                                    ref={inputRefs[index]}
                                    className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black justify-center text-[18px] font-Poppins outline-none text-center ${invalidError ? "shake border-red-500" : "border-[#0000004a]"
                                        }`}
                                    maxLength={2}
                                    value={verifyNumber[key as keyof VerifyNumber]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <button className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={verificationHandler} disabled={loading}>
                            {loading ? <div className="spinner"></div> : "Verify OTP"}
                        </button>
                    </div>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    <a href="/login" className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}>Login here</a>
                </p>
            </div>
        </div>
        </>
    )
}

export default Verification