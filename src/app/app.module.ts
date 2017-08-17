import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {routing} from './app.router';
import {TestaComponent} from './components/testa/testa.component';
import {TestbComponent} from './components/testb/testb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestaComponent,
    TestbComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
