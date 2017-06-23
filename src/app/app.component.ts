import { Component } from '@angular/core';
import {YaziService} from './service.yazi';
import { FormGroup , FormControl, Validators,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  forms : FormGroup;
  list: any[] = [];
  
  constructor(private yaziService: YaziService)
  {
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
          console.log(response.json());
    /*    var result = response.json();
        this.list = result;
        console.log("arda");
        console.log(this.list);*/
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
