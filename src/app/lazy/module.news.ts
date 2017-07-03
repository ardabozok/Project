import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { newsRouting } from "./routing.news";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { NewsMainComponent } from "../controller/news/component.main";
@NgModule({

    imports: [
    CommonModule,
    newsRouting, 
    FormsModule, 
    HttpModule,      
              ],
              
    declarations: [
     
      NewsMainComponent
   ],

   providers: [],
    
})

export class NewsModule{
    
    }