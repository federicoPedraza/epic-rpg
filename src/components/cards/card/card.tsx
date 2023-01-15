import React from 'react'
import { ICard } from './card.constants';   
import './cards.sass'
import Draggable from 'react-draggable';

export const Card = (props: ICard) => {
    const { id, title, children, closeable, onClose, position } = props;

    const onCloseCard = () => {
        onClose(id);
    }

    return (
        <Draggable bounds='body' position={position}>
            <div>
                <div className='card'>
                    <div className='card-header'>
                        <span className='card-title'>{title}</span>
                        {closeable && (
                            <button className='card-exit-button' onClick={onCloseCard}>
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>
                    <div className='card-content'>
                        {children}
                    </div>
                </div>
            </div>
        </Draggable>
    )
}
