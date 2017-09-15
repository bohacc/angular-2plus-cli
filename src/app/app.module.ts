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
import { ChildNodeComponent } from './components/child-node/child-node.component';
import { Child2Component } from './components/child2/child.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestaComponent,
    TestbComponent,
    MenuComponent,
    HeaderComponent,
    ListComponent,
    AutosearchDirective,
    ChildNodeComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
