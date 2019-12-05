import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hooks-example',
  template: `
    <contacts-list [title] = '"Managers"'>
      <contacts-item [name] = '"Peter"'></contacts-item>
    </contacts-list>
  `
 })
 export class HooksExampleComponent{}