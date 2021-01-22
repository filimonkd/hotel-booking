import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service'
import {Hotel} from '../../models/Hotel'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(hotels =>{
      this.hotels = hotels;
    });
  }
}
