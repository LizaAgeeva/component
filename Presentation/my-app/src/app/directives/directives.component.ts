import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  showIf:boolean = false;
  showSwitch: boolean = false;
  showFor: boolean = false;
  showClass: boolean = false;
  showStyle: boolean = false;

  isCollapsedIf: boolean = true;
  cat: string = 'pink';
  colors: any[] = [
    'green',
    'yellow',
    'pink', 
    'blue',
    'orange',
   ];


  ngOnInit() {
  }
  showBlockIf(){
  this.isCollapsedIf=!this.isCollapsedIf;
  } 
  showBlockIfbtn(){
    this.showIf=true;
    this.showSwitch=false;
    this.showFor=false;
    this.showStyle=false;
    this.showClass=false;
  }
  showBlockFor(){
    this.showIf=false;
    this.showSwitch=false;
    this.showFor=true;
    this.showStyle=false;
    this.showClass=false;
  }
  showBlockSwitch(){
    this.showIf=false;
    this.showSwitch=true;
    this.showFor=false;
    this.showStyle=false;
    this.showClass=false;
  }
  showBlockStyle(){
    this.showIf=false;
    this.showSwitch=false;
    this.showFor=false;
    this.showStyle=true;
    this.showClass=false;
  }
  showBlockClass(){
    this.showIf=false;
    this.showSwitch=false;
    this.showFor=false;
    this.showStyle=false;
    this.showClass=true;
  }


}
