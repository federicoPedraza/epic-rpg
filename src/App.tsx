import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './App.sass';
import { ThreeConsole } from './components/console/3dconsole';
import { state } from './components/three/ui/CommandCenter.utils';
import { Overlay } from './components/three/ui/CommandCenterOverlay';
import { ExpandableCarousel } from './components/three/ui/ExpandableCarousel';

function App() {
  return (
    <div className='container'>
    <Suspense fallback={null}>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
        <ExpandableCarousel />
      </Canvas>
    </Suspense>
    </div>
  );
}

export default App;
