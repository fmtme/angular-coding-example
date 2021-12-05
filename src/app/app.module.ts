import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
