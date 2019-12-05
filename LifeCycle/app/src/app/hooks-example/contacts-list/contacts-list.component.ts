import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked,
Input, ViewChild, ContentChild, SimpleChanges } from '@angular/core';


import { ContactsItemComponent } from './contacts-item/contacts-item.component';

@Component({
  selector: 'contacts-list',
  template: `
    <h2>Contacts List of {{company}}</h2>
    <ng-content></ng-content>
    <contacts-item [name] = '"Jack"'></contacts-item>
    <contacts-item [name] = '"Daniel"'></contacts-item>
  `
 })
 
 export class ContactsListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked{
 
 @Input() title: string;
 
 company: string = 'Google Inc.';
 
  @ViewChild(ContactsItemComponent,  {static: false}) vwCh: ContactsItemComponent;
  @ContentChild(ContactsItemComponent,  {static: false}) cntCh: ContactsItemComponent;
 
  ngOnChanges(obj: SimpleChanges){
    console.log('OnChanges', obj);
  }
 
  ngOnInit(){
    console.log('OnInit', this.company);
  }
 
  ngDoCheck(){
    console.log('DoCheck');
  }
 
  ngAfterContentInit(){
    console.log('AfterContentInit', this.cntCh);
  }
 
  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }
 
  ngAfterViewInit(){
    console.log('AfterViewInit', this.vwCh);
  }
 
  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }
 }