import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, useScroll, Text, TransformControls, useTexture, MeshDistortMaterial } from '@react-three/drei'
import { state } from './CommandCenter.utils'
import { IExpandableItem } from "./ui.interfaces"
import { ITEM_BASE_SCALE_Y, ITEM_PRESELECTED_GRAYSCALE_AMOUNT, ITEM_SELECTED_GAP_TIME, ITEM_SELECTED_GAP_X, ITEM_SELECT_COLOR_DELAY, ITEM_UNSELECT_DELAY, SCROLLED_IN_AFFECTED_AMOUNT, SCROLLED_IN_INFLUENCED_AMOUNT, SCROLL_CLICKED_SCALE_X, SCROLL_CLICKED_SCALE_Y, SCROLL_FOCUSED_COLOR, SCROLL_GRAYSCALE, SCROLL_LAMBDA, SCROLL_UNFOCUSED_COLOR } from './ExpandableItem.constants'
import { damp } from 'three/src/math/MathUtils'

export const ExpandableItem = ({ index, position, scale, c = new THREE.Color(), url, ...props }:IExpandableItem) => {
    const ref = useRef<any>()
    const scroll = useScroll()
    const colorTexture = useTexture('./assets/textures/glass.jpg')
    const { clicked, urls } = useSnapshot(state)
    const [hovered, hover] = useState(false)
    const click = () => ((state.clicked = index === clicked ? null : index))
    const over = () => hover(true)
    const out = () => hover(false)
    useFrame((state, delta) => {
    if (ref?.current && ref?.current.scale && Array.isArray(position) && Array.isArray(scale)){
        const y = scroll.curve(index / urls.length - SCROLLED_IN_INFLUENCED_AMOUNT / urls.length, SCROLLED_IN_AFFECTED_AMOUNT / urls.length)
        ref.current.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? SCROLL_CLICKED_SCALE_X : ITEM_BASE_SCALE_Y + y, SCROLL_LAMBDA, delta)
        ref.current.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? SCROLL_CLICKED_SCALE_Y : scale[0], SCROLL_LAMBDA, delta)
        if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - ITEM_SELECTED_GAP_X, ITEM_SELECTED_GAP_TIME, delta)
        if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + ITEM_SELECTED_GAP_X, ITEM_SELECTED_GAP_TIME, delta)
        if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], ITEM_UNSELECT_DELAY, delta)
        ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(ITEM_PRESELECTED_GRAYSCALE_AMOUNT, SCROLL_GRAYSCALE - y), ITEM_SELECT_COLOR_DELAY, delta)
        ref.current.material.color.lerp(c.set(hovered || clicked === index ? SCROLL_FOCUSED_COLOR : SCROLL_UNFOCUSED_COLOR), hovered ? 0.3 : 0.1)
    }
    })
    return <TransformControls axis='x' mode="rotate" >
            <RoundedBox ref={ref}  position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} >
                <Text color='#f3f3f3' fontSize={.25}>holaa</Text>
                <MeshDistortMaterial distort={.25} speed={.5}  map={colorTexture} />
            </RoundedBox>
        </TransformControls>
  }