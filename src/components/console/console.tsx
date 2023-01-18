import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { Card } from '../cards/card/card';
import { CardType, ICard } from '../cards/card/card.constants';
import levenshtein from 'fast-levenshtein';
import { useClipboard } from 'use-clipboard-copy';
import './console.sass';

import { CommandCenter } from '../../services/console.service';

const ConsoleCard = (props: ICard) => {
    const { copy } = useClipboard();
    const [value, setValue] = useState<string>('');
    const [lastValue, setLastValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const multipleCommands = value.includes(';');
        const commands = multipleCommands ? value.split(';') : [value]; 

        commands.forEach(command => {
            let word = command.match(/\S+/g);
            let args = word?.slice(1).join(' ');
            console.log(args);
            if (args && word)
                CommandCenter.getInstance().executeCommand(word[0], args)
        })
        
        setLastValue(value);
        setValue('');
        if (inputRef.current)
            inputRef.current.focus();
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const commandsKey = Array.from(CommandCenter.getInstance().commands.keys());
            let closestMatch = '';
            let minDistance = Number.MAX_SAFE_INTEGER;
            commandsKey.forEach((command) => {
                const distance = levenshtein.get(value, command);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestMatch = command;
                }
            });

            setValue(closestMatch);
        } else if (e.key === 'ArrowUp') {

        } else if (e.key === 'ArrowDown') {

        }
    }

    const copyOnClipboard = (e: any) => {
        copy(lastValue);
    }

    return (
        <div>
            <Card {...props} title='' type={CardType.LONG}>
                <div className='last-command-container'>
                    {lastValue && <span className='last-command'>{lastValue}</span>}
                    {lastValue.length > 0 &&
                        <button className='clipboard-button' onClick={copyOnClipboard} disabled={lastValue.length === 0} type='button'>
                            <FontAwesomeIcon icon={faClipboard} />
                        </button>}
                </div>
                <form onSubmit={onSubmit}>
                    <div className='console-container'>
                        <input ref={inputRef} className='console' onKeyDown={onKeyDown} value={value} onChange={(e) => setValue(e.target.value)}
                            type="text" />
                        <button className='submit-button' disabled={value.length === 0} type='submit'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default ConsoleCard;