import React from 'react'
import { CardType, ICard } from './card.constants';   
import './cards.sass'
import { LongCard } from './long-card';
import { SmallCard } from './small-card';

export const Card = (props: ICard) => {
    const { id, onClose, type } = props;

    const onCloseCard = () => {
        onClose(id);
    }

    switch (type) {
        case CardType.SMALL:
            return (<SmallCard {...props} onClose={onCloseCard} />)

        case CardType.LONG:
            return (<LongCard {...props} onClose={onCloseCard} />)

        default:
            return (<SmallCard {...props} onClose={onCloseCard} />)
    }
}
