import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SliderMainComponent} from "app/controller/slider/component.main";
//import { NewsEditComponent} from "app/controller/news/component.edit";

const sliderRoutes: Routes = [
    {path: 'home', component: SliderMainComponent, },
   // { path: 'edit/:id', component: NewsEditComponent },
                            
                            ];

export const sliderRouting: ModuleWithProviders = RouterModule.forChild(sliderRoutes);
