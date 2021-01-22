import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Hotel} from 'src/app/models/Hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelsUrl:string = '/api/hotels';
  hotelDetailUrl:string = '/api/hotels/';
  roomsUrl:string = '/api/rooms?hotel_id='

  constructor(private http:HttpClient) { }

  //get Hotels
  getHotels():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.hotelsUrl}`);
  }
  //get HotelDetail
  getHotelDetail(HotelId:Number):Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.hotelDetailUrl}${HotelId}`);
  }
  //get rooms
  getRooms(HotelId:Number):Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.roomsUrl}${HotelId}`);
  }
}
