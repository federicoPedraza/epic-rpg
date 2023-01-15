import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './welcome-card.sass'

export const WelcomeCard = (props: ICard) => {
    const { id, title, onClose, position } = props;
    const hasUser = false;
    //TODO: Remove closeable when user is null.

    return (
        <Card id={id} position={position} title={title} onClose={onClose} closeable={hasUser}>
            <div className='welcome-card'>
                <span><b>Welcome to EPIC RPG.</b></span>
                <span>Please continue by logging in or signing up.</span>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </Card>
    )
}
