import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SpaceSizes from "../../../../services/shared/space/SpaceSizes";
import { angleToRadians } from "../../utils/angle";
import { gripIntesity } from "./camerasHooks.interfaces";

export const useMouseGrippedOrbit = ( gripIntensity:gripIntesity ) => {
    const { x:xGrip, y:yGrip } = gripIntensity
    const orbitControlsRef = useRef<any>(null)
    useFrame((state)=>{
        if(!!orbitControlsRef.current){
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x/xGrip)
            // orbitControlsRef.current.setPolarAngle((y + .25) *  angleToRadians(70))
            orbitControlsRef.current.update()
        }
    })
    return { orbitControlsRef }
}

export const useMouseFollowUntilAngle = ( angle:number ) => {
    const orbitControlsRef = useRef<any>(null)
    useFrame((state)=>{
        if(!!orbitControlsRef.current){
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x*angleToRadians(angle))
            orbitControlsRef.current.update()
        }
    })
    return { orbitControlsRef }
}