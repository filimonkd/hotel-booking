import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelListComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
