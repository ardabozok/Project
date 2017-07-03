import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { NewsMainComponent} from "app/controller/news/component.main";

const newsRoutes: Routes = [
    {path: 'home', component: NewsMainComponent, }                        
                            
                            ];

export const newsRouting: ModuleWithProviders = RouterModule.forChild(newsRoutes);
