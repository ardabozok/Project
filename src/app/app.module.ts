import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import {YaziService} from './service.yazi';

import {HomeComponent} from './controller/component.home';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase,"firstproject"),
    routing
    
  ],
  providers: [YaziService],
  bootstrap: [AppComponent]
})
export class AppModule { }
