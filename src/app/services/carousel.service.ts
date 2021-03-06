import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CarouselService {

  constructor(private http: Http) { }

  private getHeaders() {
    let headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  public async getCarousel(id: string) {
    const headers = this.getHeaders();

    let url = `${environment.baseUrl}/carousel/${id}`;

    return this.http.get(url, headers)
      .map((res: any) => {
        res = JSON.parse(res._body);
        return res;
      })
      .toPromise()
      .catch((error: any) => error || 'Server error');
  }

  
}
