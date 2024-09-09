'use client'

import React, { useState } from 'react'
import Register from './_components/Register'
import Verification from './_components/Verification'

type Props = {}


const RegisterPage = (props: Props) => {
    const [route, setRoute] = useState("register");

    return (
        <>
            {
                route === "register" && <Register setRoute={setRoute} />
            }
            {
                route === "verify" && <Verification setRoute={setRoute} />
            }
        </>

    )
}

export default RegisterPage