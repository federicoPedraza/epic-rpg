import React from 'react';
import Draggable from 'react-draggable';
import { ICard } from './card.constants';
import './cards.sass'

export const SmallCard = (props: ICard) => {
    const { position, title, closeable, children, onClose, onDrag, style, onStartDrag, onEndDrag } = props;

    return (
        <Draggable bounds='body' onStart={onStartDrag} onDrag={onDrag} onStop={onEndDrag} defaultPosition={position}>
            <div>
                <div className={`card small-card ${style}`}>
                    {(title || closeable) && <div className='card-header'>
                        {title && <span className='card-title'>{title}</span>}
                        {closeable && (
                            <button className='card-exit-button' onClick={onClose}>
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>}
                    <div className='card-content'>
                        {children}
                    </div>
                </div>
            </div>
        </Draggable>
    )
}