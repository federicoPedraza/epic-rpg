import React, { useState } from 'react'
import RestService from '../../../services/rest.service';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

const SignupCard = (props: ICard) => {
    const [ username, setUsername ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSignup = async (event: any) => {
        event.preventDefault();

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
            <form onSubmit={handleSignup}>
                <label>
                    Username
                    <input type="text" value={username} onChange={v => setUsername(v.target.value) } />
                </label>
                <label>
                    Email
                    <input type="text" value={email} onChange={v => setEmail(v.target.value) } />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={v => setPassword(v.target.value) }  />
                </label>
                <input type="submit" value="Signup" />
            </form>
        </Card>
    )
}

export default SignupCard;