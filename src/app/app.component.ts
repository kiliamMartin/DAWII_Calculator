import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Calculator';
  screen="";
  operator=""


  show(element:any){
    this.screen += element.toString()
  }


  resolve(){
    var value = eval(this.screen)
    this.screen = (value).toString()

  }

  reset(){
    this.screen = ""
  }

  setOperator(operator:string):void {
    this.operator = operator
    this.show(operator)
  }

  

}
