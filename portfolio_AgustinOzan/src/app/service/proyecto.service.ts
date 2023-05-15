import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL + 'proyectos/'

  constructor(private httpClient: HttpClient) { }

  //*Nos trae una lista completa*//
  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL+ 'lista');
  }

  //*Nos trae uno ya cargado anteriormente*//
  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL+ `detail/${id}`);
  }

  //*Crea el objeto*//
  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL+ 'create', proyecto);
  }

  //*Actualizar por ID*//
  public update(id: number, educacion: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`, educacion);
  }

  //*Borrar por ID*//
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }

}
