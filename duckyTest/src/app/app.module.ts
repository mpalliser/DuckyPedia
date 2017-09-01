import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { DuckyListComponent } from './info/ducky-list/ducky-list.component';
import { DuckyDetailComponent } from './info/ducky-detail/ducky-detail.component';
import { DuckyItemComponent } from './info/ducky-list/ducky-item/ducky-item.component';
import { HomeComponent } from './home/home.component';
import { HonorDucksComponent } from './honor-ducks/honor-ducks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    DuckyListComponent,
    DuckyDetailComponent,
    DuckyItemComponent,
    HomeComponent,
    HonorDucksComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
