export class HttpResponse {
  constructor(status, statusText, data) {
    (this.status = status), (this.statusText = statusText), (this.data = data);
  }
  status: number;
  statusText: string;
  data: any;
};
