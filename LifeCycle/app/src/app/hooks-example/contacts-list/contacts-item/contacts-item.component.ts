import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contacts-item',
  template: `<p>{{name}}</p>`
 })
 
 export class ContactsItemComponent {
  @Input() name: string = null;
 }