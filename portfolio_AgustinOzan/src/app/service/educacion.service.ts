import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL + 'educacion/'

  constructor(private httpClient: HttpClient) { }

  //*Nos trae una lista completa*//
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL+ 'lista');
  }

  //*Nos trae una EDUCACION ya cargada anteriormente*//
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL+ `detail/${id}`);
  }

  //*Crea el objeto*//
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL+ 'create', educacion);
  }

  //*Actualizar por ID*//
  public update(id: number, educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`, educacion);
  }

  //*Borrar por ID*//
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }

}
