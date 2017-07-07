import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CategoryMainComponent} from "app/controller/category/component.main";
//import { NewsEditComponent} from "app/controller/news/component.edit";

const categoryRoutes: Routes = [
    {path: 'home', component: CategoryMainComponent, },
    //{ path: 'edit/:id', component: NewsEditComponent },
                            
                            ];

export const categoryRouting: ModuleWithProviders = RouterModule.forChild(categoryRoutes);
