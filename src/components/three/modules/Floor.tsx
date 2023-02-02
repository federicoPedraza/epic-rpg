import { OrbitControls, useTexture } from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { IFloor } from "./modules.interfaces";

export function Floor({ width, height, position, color }:IFloor){
    
    const aoTexture = useTexture('./assets/textures/AO/GroundDirtForest014_AO_2K.jpg')
    const colorTexture = useTexture('./assets/textures/COL/GroundDirtForest014_COL_2K.jpg')
    const displacementMap = useTexture('./assets/textures/DISP/GroundDirtForest014_DISP_2K.jpg')
    const roughnessMap = useTexture('./assets/textures/GLOSS/GroundDirtForest014_GLOSS_2K.jpg')
    const bumpTexture = useTexture('./assets/textures/NRM/GroundDirtForest014_NRM_2K.jpg')
    const reflectionTexture = useTexture('./assets/textures/REFL/GroundDirtForest014_REFL_2K.jpg')
    return <mesh receiveShadow position={position} rotation={[(-angleToRadians(90)),0,0]}>
        <planeGeometry args={[width,height]} />
        <meshStandardMaterial 
        lightMap={reflectionTexture}
        roughnessMap={roughnessMap} roughness={15}
        bumpScale={0.015} bumpMap={bumpTexture} 
        aoMap={aoTexture} aoMapIntensity={2.5} 
        displacementMap={displacementMap} displacementScale={0.05} displacementBias={.001}
        map={colorTexture}  />
    </mesh>
}