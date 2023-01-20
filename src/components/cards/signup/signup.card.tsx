import React, { useState } from 'react'
import RestService from '../../../services/rest.service';
import { EMAIL_VERIFICATION_REGEX, isEmptyOrNull, PASSWORD_VERIFICATION_REGEX, USERNAME_VERIFICATION_REGEX } from '../../../utils/verifiers';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './signup.card.sass';

const SignupCard = (props: ICard) => {
    const [ username, setUsername ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('Please fill all fields.');

    const handleSignup = async (event: any) => {
        event.preventDefault();
        
        if (isEmptyOrNull(password) || isEmptyOrNull(email) || isEmptyOrNull(username)) {
            setMessage("Please fill all fields");
        }

        if (!EMAIL_VERIFICATION_REGEX.test(email)) {
            setMessage("Your email is invalid or unavailable");
            return;
        }
        
        if (USERNAME_VERIFICATION_REGEX.test(username)) {
            setMessage("Your username has invalid characters. It must contain at least 3 characters");
            return;
        }
        
        if (PASSWORD_VERIFICATION_REGEX.test(password)) {
            setMessage("Your password is invalid. It must contain at least 8 characters, one capital letter, and one number.");
            return;
        }

        try {
            const restService = RestService.getInstance();
            const user = await restService.signup(username, email, password);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card {...props} title="Signup" closeable>
            <div className='signup-container'>
                <span>{message}</span>
                <form onSubmit={handleSignup}>
                    <label>
                        Username
                        <input type="text" value={username} required onChange={v => setUsername(v.target.value) } />
                    </label>
                    <label>
                        Email
                        <input type="email" value={email} required onChange={v => setEmail(v.target.value) } />
                    </label>
                    <label>
                        Password
                        <input type="password" value={password} required onChange={v => setPassword(v.target.value) }  />
                    </label>
                    <input type="submit" value="Signup" />
                </form>
            </div>
        </Card>
    )
}

export default SignupCard;