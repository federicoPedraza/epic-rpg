import React, { useEffect } from 'react'
import { commands } from '../../services/commands';
import { CommandCenter } from '../../services/console.service';
import { ICanvas } from './canvas.constants'

export const Canvas = (props: ICanvas) => {
    const { children } = props;

    useEffect(() => {
        const commandCenter = CommandCenter.getInstance();
        commandCenter.registerCommands(commands);
    }, []);
    
    return (
        <div className="canvas">
            {children}
        </div>
    )
}
