import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup , FormControl, Validators,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {YaziService} from '../../service.yazi';


@Component({
  selector: 'newsEdit',
  templateUrl: '../../view/news/edit.html',
  styles: []
})

export class NewsEditComponent {
    sub: any;
    id: string;

    items: FirebaseListObservable<any[]>;
    Form: FormGroup;

    constructor(private route: ActivatedRoute,private router: Router,private yaziService: YaziService,private db: AngularFireDatabase)
    {
      
        this.Form = new FormGroup({
            baslik : new FormControl(null,),
            yazi: new FormControl(null),
            yazar : new FormControl(null)
        });
        
        
        
        
        
        this.sub = this.route.params.subscribe(params => {
             if(params['id'] != null) {
               this.id = params['id'];
               console.log(this.id);
               
               this.items = db.list('/data', { preserveSnapshot: true });
               this.items
                 .subscribe(snapshots => {
                     
                   snapshots.forEach(snapshot => {
                      
                     console.log(snapshot.key)
                     console.log(snapshot.val().baslik)
                     
                     if(this.id == snapshot.key)
                         {
                     
             this.Form.controls["yazi"].setValue(snapshot.val().yazi);
               this.Form.controls["baslik"].setValue(snapshot.val().baslik);
               this.Form.controls["yazar"].setValue(snapshot.val().yazar);
                         }
               
           
                   });
                 })
             } 
          });
        
     
    }
    
    fileEvent(fileInput: any){
        let file = fileInput.target.files[0];
        let fileName = file.name;
        console.log(fileName);
    }
    
    ngOnInit(){
        

        
        }   
    
    updateItem() {
        console.log(this.Form.value.baslik);
        this.items.update(this.id, {baslik: this.Form.value.baslik,
                                    yazi: this.Form.value.yazi,
                                    yazar: this.Form.value.yazar});
        
      }
    
}
