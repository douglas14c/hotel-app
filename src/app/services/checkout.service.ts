/*
1-PEGAR DADOS DO INPUT
2-NO CARTÃO DE CREDITO DAR A OPÇÃO DE PARCELAS
3-AO CLICAR NO AGENDAR DEVERÁ CRIAR UM BOOKING NO MEU BANCO DE DADOS
*/

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Checkout } from '../models/checkout';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class CheckoutService {

  constructor(private http: Http) { }

  private getHeaders() {
    let headers = new Headers({});
    headers.append('Content-type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  checkoutOrder(checkout: Checkout) { //função que cria uma order pra mainha reserva
    const headers = this.getHeaders(); //chama os meus headers

    let url = `${environment.baseUrl}/checkout`; //define o caminho onde essa order será criada
    let body = JSON.stringify(checkout) //pega o corpo da req e transforma num json

    return this.http.post(url, body, headers) //retorna o post
    .map((res: Response) => res.json()) //vai varrer todo o meu objeto e incluir ele no json
    .toPromise() //fica esperando uma promise? é necessário? quando usar?
    .catch((error: any) => error || 'Server error'); //se alguma coisa der errado ele me volta um erro
  }

}
