import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './App.sass';
import { BasicScenario } from './components/three/modules/BasicScenario';
import { state } from './components/three/ui/CommandCenter.utils';

function App() {
  return (
    <div className='container'>
    <Suspense fallback={null}>
      <Canvas  dpr={[1, 1.5]} shadows onPointerMissed={() => (state.clicked = null)}>
        <BasicScenario/>
      </Canvas>
    </Suspense>
    </div>
  );
}

export default App;
