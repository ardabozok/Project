import { Component } from '@angular/core';
import {YaziService} from '../../service.yazi';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'newsHome',
    templateUrl: '../../view/news/home.html'
})

export class NewsMainComponent {
    
    items: FirebaseListObservable<any[]>;
    
    constructor(private yaziService: YaziService,db: AngularFireDatabase)
    {
        this.items = db.list('/data');
        
    }
    
  
    
    getList(){
        this.yaziService.getList().subscribe(
        response => {
            console.log(response);
            var result = response.json();
            console.log(result.object);
            console.log(this.items);
            
            
        }   ,
        error => {
            
        },
        ()=> {}
        
        );
   }
    
    
}