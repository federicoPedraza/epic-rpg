import { Canvas, useThree } from "@react-three/fiber"
import { useSnapshot } from "valtio"
import { state } from "./CommandCenter.utils"
import { IExpandableCarousel } from "./ui.interfaces"
import { Image, ScrollControls, Scroll} from '@react-three/drei'
import { ExpandableItem } from "./ExpandableItem"


export const ExpandableCarousel = ({ w = .25, gap = 0.01 }:IExpandableCarousel) => {
    const { urls } = useSnapshot(state)
    const { width } = useThree((state) => state.viewport)
    const xW = w + gap
    return (
        <ScrollControls horizontal damping={10} pages={(width - xW + urls.length * xW) / width}>
        <Scroll>
          {urls.map((url, i) => <ExpandableItem key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
        </Scroll>
      </ScrollControls>
    )
  }