import React from 'react';

import FormInput from '../form-input/form-input.componets';
import CustomButton from '../custom-button/custom-button.components';
import { signInWithGoogle } from '../../firbase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }



    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span >Sigin  in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {''}
                        Sign in with Google{''}
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;
