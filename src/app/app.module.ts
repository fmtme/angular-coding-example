import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonListComponent} from './person/person-list/person-list.component';
import {PersonFormComponent} from './person/person-form/person-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppMaterialModule} from "./app-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
    declarations: [
        AppComponent,
        PersonListComponent,
        PersonFormComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule
    ],
    providers: [MatNativeDateModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
