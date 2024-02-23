import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  listMessages: Message[];
  messagetoTopic: Message;
  sorter: string;

  constructor(private messageService: MessageServiceService) {
    this.messagetoTopic = new Message();
  }

  onSubmit() {
    if (this.messagetoTopic.topic != null) {
      this.messageService.getMessages(this.messagetoTopic.topic).subscribe(data => {
        this.listMessages = data;
        if (this.sorter != null) {
          this.sortFunction(this.sorter)
        }
      });
    } else {
      this.messageService.getAllMessage().subscribe(data => {
        this.listMessages = data;
        if (this.sorter != null) {
          this.sortFunction(this.sorter)
        }
      });
    }


  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe(data => {
      console.log(data)
      this.listMessages = data;
    });
  }

  sortFunction(sorter) {
    if (sorter == "asc") {
      this.listMessages.sort((a, b) => ((new Date(b.date).getTime() - new Date(a.date).getTime())))
    } else if (sorter == "desc") {
      this.listMessages.sort((a, b) => ((new Date(a.date).getTime() - new Date(b.date).getTime())))
    }
  }
}
