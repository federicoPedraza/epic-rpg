import { Vector2 } from "../../../utils/vector2";

export interface ICard {
    id: string;
    position: typeof Vector2;
    title?: string;
    children?: any;
    closeable?: boolean;
    onClose?: any;
    type?: CardType;
}

export enum CardType {
    SMALL,
    BIG,
    LONG
}