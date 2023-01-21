import React from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './profile-card.sass'

const ProfileCard = (props: ICard) => {
    return (
        <Card {...props} title="Profile">
            <div className='profile-card'>
                <span>Username:</span>
            </div>
        </Card>
    )
}

export default ProfileCard;