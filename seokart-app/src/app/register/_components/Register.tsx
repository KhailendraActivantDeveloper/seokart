'use client'
import Input from '@/components/Auth/Form/Input'
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import Heading from '@/utils/Heading';
import { useFormik } from 'formik';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

type Props = {
    setRoute: (route: string) => void;
}

const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    email: Yup.string().email("Invalid email!").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6),
})

const Register: React.FC<Props> = ({setRoute}) => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [register, { isError, data, isSuccess, isLoading, error }] = useRegisterMutation();

    useEffect(() => {
        if (isSuccess) {
            const message = data?.message || "Registration successful!";
            toast.success(message);
            setRoute("verify");
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
        // if(isError){
        //   toast.error("something wents wrong");
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, error, isLoading]);

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, password }: { name: string, email: string, password: string }) => {
            const data = { name, email, password };
            await register(data);
        }
    })

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <>
        <Heading
            title={"Registration Page"}
        />
            <div className="h-screen">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image width={80} height={80} className="mx-auto" src="images/logo-icon.svg" alt="Your Company" />
                    <h2 className={"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}>Sign up to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit} method='POST'>
                        <Input
                            id={"name"}
                            label={"Full Name"}
                            name='name'
                            type='name'
                            placeholder='abc'
                            required={true}
                            onChange={handleChange}
                            value={values.name}
                            errors={errors.name}
                            touched={touched.name}
                        />
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
                            required={true}
                            onChange={handleChange}
                            value={values.password}
                            errors={errors.password}
                            touched={touched.password}
                        />

                        <div>
                            <button type="submit" className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?
                        <a href="/login" className={"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"}>Login here</a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register