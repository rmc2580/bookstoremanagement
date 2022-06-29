import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookdataService {
  url = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);

  }
  saveUsers(data: any) {
    return this.http.post(this.url, data);
  }
  deleteuser(data: any) {
    return this.http.delete(`${this.url}/${data}`);
  }
}