import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './welcome-card.sass'

const WelcomeCard = (props: ICard) => {
    //TODO: Remove closeable when user is null.

    return (
        <Card {...props} title="Welcome">
            <div className='welcome-card'>
                <span><b>Welcome to EPIC RPG.</b></span>
                <span>Please continue by logging in or signing up.</span>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </Card>
    )
}

export default WelcomeCard;