import { Pessoa } from './../models/pessoa.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private listaPessoas: any[];
  private url = 'http://localhost:3000/pessoas';

  constructor(private httpCliente: HttpClient) {
    this.listaPessoas = [];
  }

  get pessoas() {
    return this.listaPessoas;
  }

  getAll(): Observable<Pessoa[]> {
    return this.httpCliente.get<Pessoa[]>(this.url);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {

    return this.httpCliente.post<Pessoa>(this.url, pessoa);
  }

  getPessoa(id: string): Observable<Pessoa> {
    const parametros = new HttpParams().set('id', id);
    return this.httpCliente.get<Pessoa>(this.url, {params: parametros});
  }

  update(id: string, pessoa: Pessoa): Observable<Pessoa> {

    const novaUrl = `${this.url}/${id}`;
    const parametros = new HttpParams().set('id', id);

    return this.httpCliente.put<Pessoa>(novaUrl, pessoa);
  }

  delete(id: string): Observable<any> {

    const novaUrl = `${this.url}/${id}`;
    return this.httpCliente.delete<any>(novaUrl);
  }

}
