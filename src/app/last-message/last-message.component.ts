import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageServiceService } from '../message-service.service';
import { last } from 'rxjs/operator/last';

@Component({
  selector: 'app-last-message',
  templateUrl: './last-message.component.html',
  styleUrls: ['./last-message.component.css']
})
export class LastMessageComponent implements OnInit {

  message: Message;

  messagetoTopic: Message;

  constructor(
    private messageService: MessageServiceService
  ) {
    this.messagetoTopic = new Message();
  }

  onSubmit() {
    if (this.messagetoTopic.topic != null) {
      this.messageService.getMessage(this.messagetoTopic.topic).subscribe(data => {
        this.message = data;
        if (this.message == null) { // TODO: change the html to do a loop on only one message to don't have cards when there is no message
          this.message = new Message();
          this.message.message = "No message sent yet in this topic";
          this.message.topic = this.messagetoTopic.topic;
        }
      });
    } else {
      this.messageService.getAllMessage().subscribe(data => {
        data.sort((a, b) => ((new Date(a.date).getTime() - new Date(b.date).getTime())));
        this.message = data[data.length - 1];
      });
    }
  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe(data => {
      data.sort((a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime()));
      this.message = data[data.length - 1];
    });
  }

}
