import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Cards from './cards.json'
import { Canvas } from './components/canvas/canvas';
import { NoteActions } from './components/cards/notes/notes.card';
import { CommandCenter } from './services/console.service';

import WelcomeCard from './components/cards/welcome/welcome.card';
import LoginCard from './components/cards/login/login.card';
import SignupCard from './components/cards/signup/signup.card';
import NotesCard from './components/cards/notes/notes.card';
import ConsoleCard from './components/console/console';
import { ICard } from './components/cards/card/card.constants';

const cards = [
  ConsoleCard,
  WelcomeCard,
  LoginCard,
  SignupCard,
  NotesCard,
];

function App() {
  const [openCards, setOpenCards] = useState<any[]>([]);

  useEffect(() => {
    console.log(openCards);
  }, [openCards])

  const handleClose = (title: string) => {
    setOpenCards(previousCards => previousCards.filter((card) => {
      return card.props.title.toLowerCase() !== title && card.props.title.toLowerCase();
    }));
  }

  const handleOpen = useCallback((title: string) => {
    setOpenCards([...openCards])
  }, [])

  const handleNotesChange = (note: string) => {
    let words = note.toLowerCase().split(' ');

    switch (words[0]) {
      case NoteActions.ADD:
        console.log("added to notes: ", words.slice(1))
        //connect to api and set notes
        //setNotes(notes + words.slice(1));
        break;
      case NoteActions.CLEAR:
      //finish this when api is available
      default:
        break;
    }
  }

  //TODO: Add endpoint to return user cards
  useEffect(() => {
    CommandCenter.getInstance().registerCommand('close', handleClose);
    CommandCenter.getInstance().registerCommand('open', handleOpen);
    CommandCenter.getInstance().registerCommand('note', handleNotesChange);
    handleOpen('Console');

    setOpenCards([
      (<WelcomeCard id={uuidv4()} position={{x: -100, y: 0}} title="Welcome" onClose={handleClose} />),
      (<LoginCard id={uuidv4()} position={{x: 0, y: 0}} title="Login" onClose={handleClose} />),
      (<SignupCard id={uuidv4()} position={{x: 200, y: 300}} title="Signup" onClose={handleClose} />),
      (<ConsoleCard id={uuidv4()} position={{x: 0, y: -200}} title="Signup" onClose={handleClose} />),
      (<NotesCard id={uuidv4()} position={{x: 0, y: 0}} title="Notes" onClose={handleClose} />),
    ])
  }, []);

  return (
    <div className='full-screen'>
      <Canvas>
        {openCards.map((card, index) => {
          return <card.type key={index} {...card.props} />;
        })}
      </Canvas>
    </div>
  );
}

export default App;
