import { Component } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {YaziService} from '../../service.yazi';

@Component({
    selector: 'sliderHome',
    templateUrl: '../../view/slider/home.html'
})


export class SliderMainComponent {
    
    
    categoryList: FirebaseListObservable<any[]>;
    
    constructor(private yaziService: YaziService,db: AngularFireDatabase)
    {
        
        this.categoryList = db.list('/category');
    }
}