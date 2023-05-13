import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backendagustin-cayw.onrender.com/personas/';
  //URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

   //*Nos trae una lista completa*//
   public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL+ 'lista');
  }

  //*Nos trae una EDUCACION ya cargada anteriormente*//
  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+ `detail/${id}`);
  }

  //*Actualizar por ID*//
  public update(id: number, Persona: persona):Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`, Persona);
  }

}
