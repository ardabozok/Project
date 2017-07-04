import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { newsRouting } from "./routing.news";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { NewsMainComponent } from "../controller/news/component.main";
import { NewsEditComponent } from "../controller/news/component.edit";
@NgModule({

    imports: [
    CommonModule,
    newsRouting, 
    FormsModule, 
    HttpModule,    
    ReactiveFormsModule
              ],
              
    declarations: [
     
      NewsMainComponent,
      NewsEditComponent
   ],

   providers: [],
    
})

export class NewsModule{
    
    }