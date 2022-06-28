import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string = "C:\Users\DELL\OneDrive\Documents\FrontEnd\src\assets\images\adv1.jpeg"
}
