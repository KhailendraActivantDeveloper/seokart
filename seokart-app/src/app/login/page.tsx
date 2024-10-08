'use client';
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Input from '@/components/Auth/Form/Input';
import * as Yup from 'yup';
import { useLoginMutation, useSocialAuthMutation } from '@/redux/features/auth/authApi';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import Heading from '@/utils/Heading';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import { FaLinkedin } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useRefreshTokenQuery } from '@/redux/features/api/apiSlice';

type Props = {}

const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6),
});


const Login: FC<Props> = () => {
    const [loading, setLoading] = useState(true);
    const [login, { isError, data, isSuccess, isLoading, error }] = useLoginMutation();
    const { data: sessionData } = useSession();
    const { user } = useSelector((state: any) => state.auth);

    const [socialAuth, { isSuccess: succces, error: err}] = useSocialAuthMutation()

    useEffect(() => {
        if (!user) {
            if (sessionData) {
                socialAuth({ email: sessionData?.user?.email, name: sessionData?.user?.name })
            }
        }
        if (succces && sessionData !== null) {
            const message = "Login successfully!";
            toast.success(message);
            redirect('/')
        }
        if (err) {
            if ("data" in err) {
                const errorData = err as any;
                toast.error(errorData.data.message);
            } else {
                toast.error(`An error occured ${err}`);
            }
        }
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, sessionData])

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            await login({ email, password });
        }
    })

    useEffect(() => {
        if (isSuccess) {
            const message = "Login successfully!";
            toast.success(message);
            redirect('/')
        }
        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                toast.error(errorData.data.message);
            } else {
                toast.error(`An error occured ${error}`);
            }
        }
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, error, isLoading]);

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <>
            <Heading
                title={"Login Page"}
            />
            {
                !loading ? (<>
                    <div className="h-screen">
                        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <Image width={80} height={80} className="mx-auto" src="images/logo-icon.svg" alt="Your Company" />
                                <h2 className={"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}>Sign in to your account</h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={handleSubmit} method='POST'>
                                    <Input
                                        id={"email"}
                                        label={"Email address"}
                                        name='email'
                                        type='email'
                                        placeholder='abc@gmail.com'
                                        required={true}
                                        onChange={handleChange}
                                        value={values.email}
                                        errors={errors.email}
                                        touched={touched.email}
                                    />
                                    <Input
                                        id={"password"}
                                        label={"Password"}
                                        name='password'
                                        type='password'
                                        linkLabel='Forgot password?'
                                        required={true}
                                        onChange={handleChange}
                                        value={values.password}
                                        errors={errors.password}
                                        touched={touched.password}
                                    />

                                    <div>
                                        <button type="submit" className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Sign in</button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Not a member?
                                    <a href="/register" className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}>Register here</a>
                                </p>
                                <h5 className="text-center pt-4 font-Poppins text-sm text-gray-500">Or join with</h5>
                                <div className="flex items-center justify-center my-3 text-black dark:text-white">
                                    <FcGoogle size={30} className='cursor-pointer mr-2' onClick={() => signIn("google")} />
                                    <FaLinkedin size={30} className='cursor-pointer text-blue-500  ml-2' onClick={() => signIn("linkedin")} />
                                    <SiApple size={30} className='cursor-pointer text-black ml-2' onClick={() => signIn("apple")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>) : (
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-12 h-12 border-4 border-teal-400 border-t-gray-800 rounded-full animate-spin"></div>
                    </div>
                )
            }
        </>
    )
}

export default Login