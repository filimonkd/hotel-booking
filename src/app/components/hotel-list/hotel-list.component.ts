import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Hotel} from 'src/app/models/Hotel';



@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor(private router:Router) {  }

  ngOnInit(): void {
  }
  onSelect(hotel){
    this.router.navigate(['/hotels',hotel.HotelId])
  }
  
}
