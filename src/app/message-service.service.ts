import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageServiceService {

  private messageUrl: string;
  private messagesTopicUrl: string;
  private lastMessageUrl: string;
  private messagesUrl: string;

  constructor(private http: HttpClient) {
    this.messageUrl = 'http://localhost:8081/message';
    this.messagesTopicUrl = 'http://localhost:8081/messages/all/';
    this.lastMessageUrl = 'http://localhost:8081/messages/';
    this.messagesUrl = 'http://localhost:8081/messages/all'
  }

  public send(message: Message) {
    console.log(message)
    return this.http.post<Message>(this.messageUrl, message);
  }

  public getMessage(topic): Observable<Message> {
    return this.http.get<Message>(this.lastMessageUrl + topic);
  }

  public getMessages(topic): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesTopicUrl + topic);
  }

  public getAllMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl)
  }
}
