import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http:HttpClient) { }
    private API_JUEGOS='https://jritsqmet.github.io/web-api/video_juegos.json'
    getJuego(): Observable <any>{
      return this.http.get(this.API_JUEGOS);
  
    }
    getJuegoID(id:any):Observable<any>{
      return this.http.get(`${this.API_JUEGOS}/${id}`)
  
    }
  


}
