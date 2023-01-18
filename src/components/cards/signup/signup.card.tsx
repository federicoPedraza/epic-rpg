import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

const SignupCard = (props: ICard) => {

    return (
        <Card {...props}>
            <button>Signup</button>
        </Card>
    )
}

export default SignupCard;