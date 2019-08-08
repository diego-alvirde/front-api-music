import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlbumModel } from '../models/album.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:8080/api/albums";
  
  constructor(private http: HttpClient) { }

  getAlbums(){    
    return this.http.get(`${this.url}`);
  }

  crearAlbum(album: AlbumModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'      
      })
    };
    
    return this.http.post(`${this.url}`,album, httpOptions)
    .subscribe(res => {
      console.log(res)
    })    
  }
}
