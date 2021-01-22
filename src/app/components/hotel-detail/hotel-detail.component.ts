import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HotelService} from '../../services/hotel.service'


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  @Input()hotelDetail:any;
  @Input()room:any;

  constructor(private route:ActivatedRoute,private hotelDetailService:HotelService) { }

  ngOnInit(): void {
    //get id 
    let id = parseInt(this.route.snapshot.paramMap.get('HotelId'));
    //get hotel Detail
    this.hotelDetailService.getHotelDetail(id).subscribe(hotel =>{
      this.hotelDetail = hotel;
    });
    //getRooms
    this.hotelDetailService.getRooms(id).subscribe(room =>{
      this.room = room;
    });
  }

}
