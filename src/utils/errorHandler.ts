export class ErrorHandler {
    constructor (status, statusText) {
        this.status = status,
        this.statusText = statusText
    }
    status: number;
    statusText: string;
}