import { Component, OnInit } from '@angular/core';
import { HomenoticeService } from 'src/app/service/homenotice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homenotics:any;
  constructor(private homenoticdataService:HomenoticeService) { }
  
  ngOnInit(): void {
  
    this.getNoticData();
  
  }
  getNoticData(){
     this.homenoticdataService.getData().subscribe(res => {
     this.homenotics = res;
  });
  }
  myimage:string = "assets/images/DMI.png"
  }