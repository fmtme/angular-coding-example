import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonListComponent} from './person/person-list/person-list.component';
import {PersonFormComponent} from './person/person-form/person-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppMaterialModule} from "./app-material.module";


@NgModule({
    declarations: [
        AppComponent,
        PersonListComponent,
        PersonFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        AppMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
