import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit{

  listMessages: Message[];
  messagetoTopic : Message;

  constructor(private messageService: MessageServiceService) {
    this.messagetoTopic = new Message();
   }

   onSubmit() {
    if(this.messagetoTopic.topic != null){
    this.messageService.getMessages(this.messagetoTopic.topic).subscribe(data => {
      console.log(data)
      this.listMessages = data;
    });
  } else {
    this.messageService.getAllMessage().subscribe(data => {
      console.log(data)
      this.listMessages = data;
  });
   }
  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe(data => {
      console.log(data)
      this.listMessages = data;
  });
  }
}
