import React, { useState } from 'react'
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './notes-card.sass'

export enum NoteActions {
    ADD = 'add',
    REMOVE = 'remove',
    CLEAR = 'clear',
    TITLE = 'title',
}

const NotesCard = (props: ICard) => {
    const [ notes, setNotes ] = useState<string>('');

    return (
        <Card {...props} title="Notes">
            <div className='notes-card'>
                <textarea className='notes-input' placeholder='Type here...' value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
        </Card>
    )
}

export default NotesCard;