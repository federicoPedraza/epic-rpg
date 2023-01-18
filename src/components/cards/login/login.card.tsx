import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

const LoginCard = (props: ICard) => {
    return (
        <Card {...props} title="Login" closeable>
            <button>Login</button>
        </Card>
    )
}

export default LoginCard;