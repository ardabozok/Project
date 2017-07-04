import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { NewsMainComponent} from "app/controller/news/component.main";
import { NewsEditComponent} from "app/controller/news/component.edit";

const newsRoutes: Routes = [
    {path: 'home', component: NewsMainComponent, },
    { path: 'edit/:id', component: NewsEditComponent },
                            
                            ];

export const newsRouting: ModuleWithProviders = RouterModule.forChild(newsRoutes);
