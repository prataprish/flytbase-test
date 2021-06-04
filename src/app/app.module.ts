import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BoxComponent } from './box/box.component';
import { BoxesService } from './box/boxes.service';

@NgModule({
    declarations: [
        AppComponent,
        BoxComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [BoxesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
