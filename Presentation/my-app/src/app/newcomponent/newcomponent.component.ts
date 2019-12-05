import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {
  isShow: boolean = false;
  message1: string = "Workaet";
  text: string = "Tochno Workaet";
  text1: string = "Tochno Workaet";
  constructor() { }

  ngOnInit() {
  }

  showBlock(){
    this.isShow=!this.isShow;
  }
}
