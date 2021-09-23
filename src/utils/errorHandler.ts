export class ErrorHandler {
	constructor (status: number, statusText: string, description?: string) {
		this.status = status,
		this.statusText = statusText;
		this.description = description;
	}
    status: number;
    statusText: string;
	description?: string
}