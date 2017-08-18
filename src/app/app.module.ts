import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {routing} from './app.router';
import {TestaComponent} from './components/testa/testa.component';
import {TestbComponent} from './components/testb/testb.component';
import {TestService} from './services/test/test.service';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import {AutosearchDirective} from './directives/autosearch/autosearch';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestaComponent,
    TestbComponent,
    MenuComponent,
    HeaderComponent,
    ListComponent,
    AutosearchDirective
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
