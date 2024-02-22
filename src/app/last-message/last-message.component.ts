import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-last-message',
  templateUrl: './last-message.component.html',
  styleUrls: ['./last-message.component.css']
})
export class LastMessageComponent implements OnInit {

  message: Message;

  constructor(private messageService: MessageServiceService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

}
