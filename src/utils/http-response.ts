export class HttpResponse <TData>{
	constructor(status: number, statusText: string, data: TData) {
		(this.status = status), (this.statusText = statusText), (this.data = data);
	}
  status: number;
  statusText: string;
  data: TData;
}
