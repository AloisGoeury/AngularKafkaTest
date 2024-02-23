import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastMessageComponent } from './last-message/last-message.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';


const routes: Routes = [
  { path: 'get_message', component: LastMessageComponent },
  { path: 'messages_baeldung', component: MessageFormComponent },
  { path: 'messages_baeldung_all', component: ListMessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
