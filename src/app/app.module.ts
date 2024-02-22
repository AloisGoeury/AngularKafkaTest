import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LastMessageComponent } from './last-message/last-message.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageServiceService } from './message-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LastMessageComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
