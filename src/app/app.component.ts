import { Component } from '@angular/core';
import {YaziService} from './service.yazi';
import { FormGroup , FormControl, Validators,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  forms : FormGroup;
  list: any[] = [];
  items: FirebaseListObservable<any[]>;
  
  constructor(private yaziService: YaziService,db: AngularFireDatabase)
  {
      this.items = db.list('/data');
      
      
      
      this.getList();
      this.forms = new FormGroup({
          baslik : new FormControl(null,),
          yazi: new FormControl(null),
          yazar : new FormControl(null)
      });
      
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
  
  addList(){
      
      this.yaziService.addList(this.forms).subscribe(
      response => {
          console.log(response);
          this.getList();
      },
      error =>{
          console.log("error");
      },
      () => {}
  )};
  
 
}
