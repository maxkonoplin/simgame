import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BusinessComponent, CityComponent, ComputerComponent, DeadComponent, FoodComponent, GameComponent, HouseComponent, InfoComponent, StartComponent, WinComponent, WorkComponent } from './pages';
import { ChapterComponent, FooterComponent, LogsComponent, MenuComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,

    ChapterComponent,
    FooterComponent,
    LogsComponent,
    MenuComponent,

    BusinessComponent,
    CityComponent,
    ComputerComponent,
    DeadComponent,
    FoodComponent,
    HouseComponent,
    InfoComponent,
    StartComponent,
    WinComponent,
    WorkComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
