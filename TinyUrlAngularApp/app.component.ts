import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input_url : String='';
  new_url: String='';

  inputUrl(url: String){
    this.input_url=url;
    this.new_url="";
  }


  createUrl(url :String){
    this.new_url="www.TUrl.com/"+ Math.floor(Math.random()*10000);

  }
  ;
}
