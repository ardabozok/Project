import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { sliderRouting } from "./routing.slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SliderMainComponent } from "../controller/slider/component.main";
//import { NewsEditComponent } from "../controller/news/component.edit";
@NgModule({

    imports: [
    CommonModule,
    sliderRouting, 
    FormsModule, 
    HttpModule,    
    ReactiveFormsModule
              ],
              
    declarations: [
     
      SliderMainComponent,
      //NewsEditComponent
   ],

   providers: [],
    
})

export class SliderModule{
    
    }