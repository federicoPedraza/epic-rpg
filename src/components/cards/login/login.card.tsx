import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';

export const LoginCard = (props: ICard) => {
    const { id, title, onClose, position } = props;

    return (
        <Card id={id} position={position} title={title} onClose={onClose} closeable>
            <button>Login</button>
        </Card>
    )
}
