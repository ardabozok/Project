import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import {YaziService} from './service.yazi'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase,"firstproject")
    
  ],
  providers: [YaziService],
  bootstrap: [AppComponent]
})
export class AppModule { }
