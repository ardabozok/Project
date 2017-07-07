import { Component } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {YaziService} from '../../service.yazi';

@Component({
    selector: 'categoryHome',
    templateUrl: '../../view/category/home.html'
})


export class CategoryMainComponent {
    
    
    categoryList: FirebaseListObservable<any[]>;
    
    constructor(private yaziService: YaziService,db: AngularFireDatabase)
    {
        
        this.categoryList = db.list('/category');
    }
}