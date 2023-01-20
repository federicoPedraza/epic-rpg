export interface IAlert {
    message: string;
    severity: AlertSeverity | AlertSeverity.INFO;
}

export enum AlertSeverity {
    ERROR,
    WARNING,
    SUCCESS,
    INFO,
}