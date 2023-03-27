import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OldExercise } from './models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisePlayerService {

  constructor(private httpClient: HttpClient) { }

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4NzE3MTA4LCJqdGkiOiI3NWMyNjM2NDYzYzE0MTE5YTZmODY0NzE3OGRmMzBmMSIsInVzZXJfaWQiOjJ9.1hFDgHhyua7OW8urzDc-37yxX8QUxkSgk-sOVXfrMvc";

  getExercise(id : string) : Observable<OldExercise> {
    return this.httpClient.get<OldExercise>(`https://platon.dev/api/v1/loader/parse/${id}/`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }



  submit(id : string, data : any) : Observable<any> {
    console.log(data);
    return this.httpClient.post<any>(`https://platon.dev/api/v1/submit/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }


}
