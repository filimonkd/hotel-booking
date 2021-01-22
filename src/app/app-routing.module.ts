import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './components/hotels/hotels.component'
import {HotelDetailComponent} from './components/hotel-detail/hotel-detail.component'

const routes: Routes = [
  {path:'',component:HotelsComponent},
  {path:'hotels/:HotelId',component:HotelDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
