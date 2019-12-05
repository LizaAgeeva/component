import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HooksExampleComponent } from './hooks-example/hooks-example.component';
import { ContactsListComponent } from './hooks-example/contacts-list/contacts-list.component';
import { ContactsItemComponent } from './hooks-example/contacts-list/contacts-item/contacts-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksExampleComponent,
    ContactsListComponent,
    ContactsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
