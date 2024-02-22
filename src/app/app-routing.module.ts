import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastMessageComponent } from './last-message/last-message.component';
import { MessageFormComponent } from './message-form/message-form.component';


const routes: Routes = [
  { path: 'get_message', component: LastMessageComponent },
  { path: 'messages_baeldung', component: MessageFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
