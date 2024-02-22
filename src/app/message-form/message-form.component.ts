import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageServiceService } from '../message-service.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  message : Message;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageServiceService
  ) {
    this.message = new Message();
  }

  onSubmit(){
    this.messageService.send(this.message).subscribe(result => this.gotoIndex());
  }

  gotoIndex(){
    console.log("normalement on va à get_message")
    this.router.navigate(['/get_message']);
  }

}
