import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './controller/component.home';

export const appRoutes: Routes = [

       {path: 'news' , loadChildren: 'app/lazy/module.news#NewsModule'},
       {path: 'slider', loadChildren: 'app/lazy/module.slider#SliderModule'},
       {path: 'category' , loadChildren: 'app/lazy/module.category#CategoryModule'},
       {path: '**', component:HomeComponent}
                                  
];

export const appRoutingProviders: any[] = [
                                           ];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

