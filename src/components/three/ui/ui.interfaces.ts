import { Vector3 } from "@react-three/fiber";

export interface IExpandableItem {
    index: number;
    position: Vector3;
    scale: any;
    c?: THREE.Color;
    url?: string;
}

export interface IExpandableCarousel {
    w?: number;
    gap?: number;
}
export type TCommandCenterState = {
    clicked: number | null,
    urls : string[]
}
