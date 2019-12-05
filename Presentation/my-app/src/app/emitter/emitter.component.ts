import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() onChanged = new EventEmitter <any>();
  countClick(){
    this.onChanged.emit();
  }

}
