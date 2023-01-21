import {ReactNode} from 'react'
import { Vector2 } from "../../../utils/vector2";

export interface ICard {
    id: string;
    position: typeof Vector2;
    title?: string;
    children?: ReactNode;

    open?: boolean;
    closeable?: boolean;

    onClose?: ()=>void;

    onStartDrag?: ()=>void;
    onDrag?: ()=>void;
    onEndDrag?: ()=>void;

    highlighted?: boolean;
    style?: string;
    type?: CardType;
}

export enum CardType {
    SMALL,
    BIG,
    LONG
}