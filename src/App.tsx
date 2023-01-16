import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Canvas } from './components/canvas/canvas';
import { LoginCard } from './components/cards/login/login.card';
import { SignupCard } from './components/cards/signup/signup.card';
import { WelcomeCard } from './components/cards/welcome/welcome.card';
import { ConsoleCard } from './components/console/console';
import { commands } from './services/commands';
import { CommandCenter } from './services/console.service';

function App() {
  const [ cards, setCards ] = useState<any[]>([]);
  
  const handleClose = (title: string) => {
    setCards(prevCards => prevCards.filter((card) => {
      return card.props.title !== title && card.props.title;
    }));
  }

  //TODO: Add endpoint to return user cards
  useEffect(() => {
    CommandCenter.getInstance().registerCommand('close', handleClose)

    setCards([
      (<WelcomeCard id={uuidv4()} position={{x: -100, y: 0}} title="Welcome" onClose={handleClose} />),
      (<LoginCard id={uuidv4()} position={{x: 0, y: 0}} title="Login" onClose={handleClose} />),
      (<SignupCard id={uuidv4()} position={{x: 200, y: 300}} title="Signup" onClose={handleClose} />),
      (<ConsoleCard id={uuidv4()} position={{x: 0, y: -200}} title="Signup" onClose={handleClose} />),
    ])
  }, []);

  return (
    <div className='full-screen'>
      <Canvas>
        {cards.map((card, index) => {
          return <card.type key={index} {...card.props} />;
        })}
      </Canvas>
    </div>
  );
}

export default App;
