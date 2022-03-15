import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFruits(pageSize: number,pageNumber: number) {
    return this.http.get(`http://localhost:3000/fruits?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }
}
