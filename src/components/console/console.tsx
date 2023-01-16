    import React, { useState, useRef } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faArrowRight, faClipboard } from '@fortawesome/free-solid-svg-icons'
    import { Card } from '../cards/card/card';
    import { CardType, ICard } from '../cards/card/card.constants';
    import { useClipboard } from 'use-clipboard-copy';
    import './console.sass';
import { CommandCenter } from '../../services/console.service';

    export const ConsoleCard = (props: ICard) => {
        const { id, position, onClose } = props;
        const { copy } = useClipboard();
        const [ value, setValue ] = useState<string>('');
        const [ lastValue, setLastValue ] = useState<string>('');

        const inputRef = useRef<HTMLInputElement>(null);

        const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            let word = value.match(/\S+/g);
            let command = word?.slice(1).join(' ');

            console.log(word);
            if (word) {
                CommandCenter.getInstance().executeCommand(word[0], command)
            }
            
            setLastValue(value);
            setValue('');
            if (inputRef.current)
            inputRef.current.focus();
        }
        
        const copyOnClipboard = (e: any) => {
            copy(lastValue);
        }

        return (
            <div>
                <Card id={id} position={position} title='' onClose={onClose} type={CardType.LONG}>
                    <div className='last-command-container'>
                        {lastValue && <span className='last-command'>{lastValue}</span>}
                        {lastValue.length > 0 && 
                        <button className='clipboard-button' onClick={copyOnClipboard} disabled={lastValue.length === 0} type='button'>
                            <FontAwesomeIcon icon={faClipboard} />
                        </button> }
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className='console-container'>
                            <input ref={inputRef} className='console' value={value} onChange={(e) => setValue(e.target.value)}
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