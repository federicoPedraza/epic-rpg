import { Vector2 } from "../../../utils/vector2";

export interface ICard {
    id: string;
    position: typeof Vector2;
    title?: string;
    children?: any;

    open?: boolean;
    closeable?: boolean;

    onClose?: any;

    onStartDrag?: any;
    onDrag?: any;
    onEndDrag?: any;

    highlighted?: boolean;
    style?: string;
    type?: CardType;
}

export enum CardType {
    SMALL,
    BIG,
    LONG
}