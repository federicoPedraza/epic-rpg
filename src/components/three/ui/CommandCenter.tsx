
import { Canvas as ThreeCanvas} from '@react-three/fiber'
import { Box } from '../modules/Box'
import { state } from './CommandCenter.utils'
export const CommandCenter = () => {
    return <ThreeCanvas  gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
        <ambientLight intensity={.1} />
        <directionalLight color='red' position={[0,0,10]} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
    </ThreeCanvas>
}