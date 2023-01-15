import React from 'react'
import { ICanvas } from './canvas.constants'

export const Canvas = (props: ICanvas) => {
    const { children } = props;

    const openCard = (id: string) => {
        
    }
    
    return (
        <div className="canvas">
            {children}
        </div>
    )
}
