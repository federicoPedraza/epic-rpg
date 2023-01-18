import React, { useState } from 'react'
import { CommandCenter } from '../../../services/console.service';
import { CardType, ICard } from './card.constants';   
import './cards.sass'
import { LongCard } from './long-card';
import { SmallCard } from './small-card';

export const Card = (props: ICard) => {
    const { type, title, closeable } = props;
    const [highlighted, setHighlighted] = useState<boolean>(false);

    const onCloseCard = () => {
        if (closeable)
            CommandCenter.getInstance().invokeCommand('close', title);
    }

    const onStartDrag = () => {
        setHighlighted(true);
    }

    const onEndDrag = () => {
        setHighlighted(false);
    }

    switch (type) {
        case CardType.SMALL:
            return (<SmallCard {...props} onClose={onCloseCard} onStartDrag={onStartDrag} onEndDrag={onEndDrag} style={highlighted ? 'infront' : ''} />)

        case CardType.LONG:
            return (<LongCard {...props} onClose={onCloseCard} onStartDrag={onStartDrag} onEndDrag={onEndDrag} style={highlighted ? 'infront' : ''} />)

        default:
            return (<SmallCard {...props} onClose={onCloseCard} onStartDrag={onStartDrag} onEndDrag={onEndDrag} style={highlighted ? 'infront' : ''} />)
    }
}
