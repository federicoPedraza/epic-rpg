import React, { useEffect, useState } from 'react'
import { commands } from '../../services/commands';
import { CommandCenter } from '../../services/console.service';
import { v4 as uuidv4 } from 'uuid';
import WelcomeCard from '../cards/welcome/welcome.card';
import LoginCard from '../cards/login/login.card';
import SignupCard from '../cards/signup/signup.card';
import ConsoleCard from '../console/console';
import NotesCard from '../cards/notes/notes.card';

//add dynamic imports
const cards = new Map([
    ["welcome", WelcomeCard],
    ["login", LoginCard],
    ["signup", SignupCard],
    ["console", ConsoleCard],
    ["notes", NotesCard],
])

export const Canvas = () => {
    const [openCards, setOpenCards] = useState<JSX.Element[]>([]);

    const handleClose = (title: string) => {
        setOpenCards(previousCards => previousCards.filter((card) => {
            return card.type !== cards.get(title.toLowerCase());
        }));
    }

    const handleOpen = (title: string) => {
        const isOpen = openCards.find(card => card.props.title.toLowerCase() === title.toLowerCase());
        if (isOpen) return;
        const CardComponent = cards.get(title.toLowerCase());

        if (!CardComponent) return;
        const id = uuidv4();
        const newCard = (<CardComponent key={id} id={id} title={title.toLowerCase()} position={{ x: 0, y: 0 }} />)
        setOpenCards(prevOpenCards => [...prevOpenCards, newCard]);
    };

    //TODO: Add endpoint to return user cards
    useEffect(() => {
        const commandCenter = CommandCenter.getInstance();
        commandCenter.registerCommands(commands);
        commandCenter.registerCommand('close', handleClose);
        commandCenter.registerCommand('open', handleOpen);
        commandCenter.invokeCommand('open', 'console');
    }, []);

    return (
        <div className="canvas">
            {openCards.map((card) => {
                return card;
            })}
        </div>
    )
}