import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "localhost:8080/api/albums";
  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get(`${this.url}`);
  }
}
