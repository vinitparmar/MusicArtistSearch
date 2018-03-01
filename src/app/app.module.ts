import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';

@NgModule({
  imports:      [ BrowserModule ,routing ,FormsModule,HttpModule],
  declarations: [ AppComponent,
  				  AboutComponent,
  				  SearchComponent,
  				  NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
