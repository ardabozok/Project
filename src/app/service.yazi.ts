import { Injectable} from '@angular/core';
import {HttpModule,Http,Response} from '@angular/http';
import 'rxjs/Rx';
import { FormGroup } from '@angular/forms';

@Injectable()

export class YaziService{
    
    constructor(private http:Http){
     
        
    }
    
    getList(){
       return this.http.get('https://firstproject-88f3a.firebaseio.com/data.json').map(res => res);
        
    }
    
    addList(form: FormGroup){
        
       var yazi = {};
       yazi['baslik'] = form.controls["baslik"].value;
       yazi['yazi'] = form.controls["yazi"].value;
       yazi['yazar'] = form.controls["yazar"].value;
       yazi['img'] = form.controls["img"].value;
       return this.http.post('https://firstproject-88f3a.firebaseio.com/data.json',yazi).map(res => res);
    } 
    
    addCategory(form: FormGroup){
        
        var yazi = {};
        yazi['categoryName'] = form.controls["categoryName"].value;
       
        return this.http.post('https://firstproject-88f3a.firebaseio.com/category.json',yazi).map(res => res);
     }
    
    getYazi(id:string){
          
        return this.http.get('https://firstproject-88f3a.firebaseio.com/data/'+ id).map(res => res);
    }
    
}