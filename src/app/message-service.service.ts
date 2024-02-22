import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageServiceService {

  private messagesBaeldungUrl: string;

  constructor(private http: HttpClient) {
    this.messagesBaeldungUrl = 'http://localhost:8081/messages/baeldung';
   }

  public send(message: Message){
    console.log(message)
    return this.http.post<Message>(this.messagesBaeldungUrl, message);
  }

  public getMessage(): Observable<Message>{
    return this.http.get<Message>(this.messagesBaeldungUrl)
  }
}
