import React, { useState } from 'react'
import RestService from '../../../services/rest.service';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

const LoginCard = (props: ICard) => {
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleLogin = async (event: any) => {
        event.preventDefault();
        console.log(username, password);

        try {
            const restService = RestService.getInstance();
            const user = await restService.login(username, password);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card {...props} title="Login" closeable>
            <form onSubmit={handleLogin}>
                <label>
                    Login
                    <input type="text" value={username} onChange={v => setUsername(v.target.value) } />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={v => setPassword(v.target.value) }  />
                </label>
                <input type="submit" value="Login" />
            </form>
        </Card>
    )
}

export default LoginCard;