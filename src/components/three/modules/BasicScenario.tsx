import * as THREE from '@react-three/fiber'
import { BackSide } from 'three'
import { Environment, OrbitControls, OrbitControlsProps, PerspectiveCamera } from '@react-three/drei'
import { Floor } from './Floor'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useMouseFollowUntilAngle, useMouseGrippedOrbit } from '../hooks/cameras/useMouseFollow'
import SpaceSizes from '../../../services/shared/space/SpaceSizes'
import { angleToRadians } from '../utils/angle'
export function BasicScenario(){
    const { orbitControlsRef } = useMouseGrippedOrbit({x:SpaceSizes.xl, y: 0})

    return (
        <>
            <OrbitControls ref={orbitControlsRef}  minPolarAngle={angleToRadians(80)} maxPolarAngle={angleToRadians(80)} />
            <PerspectiveCamera position={[4,0,10]}  makeDefault/>
            <mesh castShadow position={[0,2,0]}>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshStandardMaterial color="#fff"/>
            </mesh>
            <Floor position={[0,0,-7]} width={30} height={30} color={'#1ea3d8'}/>
            <ambientLight args={["#fff", .035]} position={[12,0,-15]} />
            <directionalLight args={["#f1f0c0",.35]} position={[4,0,1]} />
            <spotLight castShadow args={["#f1f0c0", .5, 25, angleToRadians(120),1]} position={[0,3,5]} />
           <Environment>
            <mesh scale={100}>
                <sphereGeometry args={[1,64,64]} />
                <meshBasicMaterial side={BackSide} color='#302b63' />
            </mesh>
           </Environment>
           
            <axesHelper />
        </>
    )
}