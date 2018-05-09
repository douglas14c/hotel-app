import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DetailService {

  constructor(private http: Http) { }

  private getHeaders() {
    let headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  getDetail(id: string) {
    const headers = this.getHeaders();

    let url = `${environment.baseUrl}/detail/${id}`;

    return this.http.get(url, headers)
    .map((res: any) => {
      res = res.json();
      return res;
    })
    .toPromise()
    .catch((error: any) => error || 'Server error');
  }
}
