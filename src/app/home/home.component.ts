import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="particle";
  constructor() {

  }

  ngOnInit() {
   particlesJS.load('particles-js', 'assets/particles.json', () => {
     console.log('callback - particles.js config loaded');
   });

  }


  onClick() {
    console.log('clicked');
  }
}
