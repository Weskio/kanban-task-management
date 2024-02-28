import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get('assets/data.json');
  // }

  // boardData: any;

  // ngOnInit() {
  //   this.boardData = this.http
  //     .get<any>('../../assets/data.json')
  //     .subscribe((data) => data);
  //   console.log(this.boardData);
  // }
}
