import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { categoryRouting } from "./routing.category";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { CategoryMainComponent } from "../controller/category/component.main";

@NgModule({

    imports: [
    CommonModule,
    categoryRouting, 
    FormsModule, 
    HttpModule,    
    ReactiveFormsModule
              ],
              
    declarations: [
     
      CategoryMainComponent,
      
   ],

   providers: [],
    
})

export class CategoryModule{
    
    }