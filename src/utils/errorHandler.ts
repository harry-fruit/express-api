export class ErrorHandler {
	constructor (status: number, statusText: string) {
		this.status = status,
		this.statusText = statusText;
	}
    status: number;
    statusText: string;
}