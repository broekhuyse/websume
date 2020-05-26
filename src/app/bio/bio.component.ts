import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    var portrait = anime({
      targets: '.portrait',
      keyframes: [
        { borderRadius: ['0%', '50%'] },
        { rotate: '1turn',
          duration: 1000 },
        { scale: 1.3 },
        { scale: 1 }
      ],
      easing: 'easeInOutQuad',
      delay: 500,
    });
  }

}
