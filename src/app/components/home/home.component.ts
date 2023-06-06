import { Component } from '@angular/core';


interface Camera {
  image: string;
  price: number;
  name: string;
  description: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {


  filter:string='camera';

  // Create an array of camera objects
cameras: Camera[] = [
    {
      image: "1.jpg",
      price: 7100,
      name: "TD-7420AS2L(D/AR1) ",
      description: "3.6MM 2MP ",
    },
    {
      image: "2.png",
      price: 8900,
      name: "TD-7421AS2S(D/AR2)",
      description: "2.8MM 2MP ",
    },
    {
      image: "3.jpg",
      price: 11151,
      name: "TD-7421AS1(D/AR1)",
      description: "2.8MM 2MP ",
    },
    {
      image: "4.png",
      price: 13900,
      name: "TD-7421TM3 (SW/WR2)",
      description: "3.6MM 2MP(COLOUR)",
    },
    {
      image: "5.jpg",
      price: 12200,
      name: "TD-7524TM3 ",
      description: "2MP(SW/WR2) 3.6MM ",
    },
    {
      image: "6.jpg",
      price: 9300.00 ,
      name: "TD-7524AE2L(D/IR1 ",
      description: "2MP",
    },
    {
      image: "7.png",
      price: 9600,
      name: "TD-7422AS2(D/AR3)  ",
      description: "2.8MM  1080P 2MP  ",
    },
    {
      image: "8.png",
      price: 8316,
      name: "TD7520AS2S(D/AR1)",
      description: "TD7520AS2S(D/AR1) 2.8MM 2MP ",
    },
    {
      image: "9.jpg",
      price: 12800,
      name: "TD-7451AS(D/AR1)",
      description: "3.6MM 	5MP ",
    },
  ];


  updateKeyword(newKeyword: string): void {
    this.filter = newKeyword;
  }
  

}
