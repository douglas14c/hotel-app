import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Hotel } from '../models/hotel';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {

  constructor(private http: Http) { }

  hotels(): Observable<Hotel[]> {
    return this.http.get(`${environment.baseUrl}/hotels`)
    .map(response => response.json());
  }

  getHotelById(_id: string): Observable<Hotel> {
    return this.http.get(`${environment.baseUrl}/hotels/${_id}`)
    .map(response => response.json());
  }
}
