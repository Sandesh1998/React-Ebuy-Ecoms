import React from "react";

import SignIn from "../../Components/sign-in/sign-in.components";
import SignUp from "../../Components/sign-up/sign-up.components";

import './sign-in-and-sign-up.styles.scss';




const SigInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
       <SignIn />
       <SignUp />
    </div>
);
export default SigInAndSignUpPage;