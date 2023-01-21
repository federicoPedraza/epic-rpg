import React, { useEffect } from 'react'
import { CommandCenter } from '../../../services/console.service';
import useStore from '../../../store';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './profile-card.sass'

const ProfileCard = (props: ICard) => {
    const { userData, wipeUser } = useStore()
    const { username } = userData

    const handleLogout = () => {
        wipeUser()
    }

    useEffect(()=>{
        CommandCenter.getInstance().registerCommand('logout', handleLogout)
    },[])


    return (
        <Card {...props} title="Profile">
            <div className='profile-card'>
                <span>Username: {username} </span>
                <button onClick={handleLogout}>logout</button>
            </div>
        </Card>
    )
}

export default ProfileCard;