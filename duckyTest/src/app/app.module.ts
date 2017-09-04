import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { DuckyListComponent } from './info/ducky-list/ducky-list.component';
import { DuckyDetailComponent } from './info/ducky-detail/ducky-detail.component';
import { DuckyItemComponent } from './info/ducky-list/ducky-item/ducky-item.component';
import { HomeComponent } from './home/home.component';
import { DucksCaidosComponent } from './ducks-caidos/ducks-caidos.component';
import { HonorDucksComponent } from './honor-ducks/honor-ducks.component';
import { HonorListComponent } from './honor-ducks/honor-list/honor-list.component';
import { HonorDetailComponent } from './honor-ducks/honor-detail/honor-detail.component';
import { HonorItemComponent } from './honor-ducks/honor-list/honor-item/honor-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    DuckyListComponent,
    DuckyDetailComponent,
    DuckyItemComponent,
    HomeComponent,
    DucksCaidosComponent,
    HonorDucksComponent,
    HonorListComponent,
    HonorDetailComponent,
    HonorItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
