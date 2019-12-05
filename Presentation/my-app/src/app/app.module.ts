import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmitterComponent } from './emitter/emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    DirectivesComponent,
    EmitterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
