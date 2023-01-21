import React from 'react'
import { AlertSeverity, IAlert } from './alert.constants'
import './small-alert.sass';

export const SmallAlert = (props: IAlert) => {
    const { message, severity } = props;

    function getColor (severity: AlertSeverity) {
        switch (severity) {
            case AlertSeverity.ERROR:
                return '#DF2935'
            case AlertSeverity.WARNING:
                return '#FFE787';
            case AlertSeverity.SUCCESS:
                return '#09E85E';
            default:
                return '#72A1E5'
        }
    }

    if (message.length === 0) return (<div></div>);

    return (
        <div className='alert-border' style={{borderColor: getColor(severity), color: getColor(severity)}}>
            <span>{message as string}</span>
        </div>
    )
}
