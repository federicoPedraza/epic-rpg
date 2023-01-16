import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

export const SignupCard = (props: ICard) => {
    const { id, title, position } = props;

    return (
        <Card id={id} position={position} title={title} closeable>
            <button>Signup</button>
        </Card>
    )
}
