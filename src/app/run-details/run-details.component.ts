import { Component, OnInit } from '@angular/core';
import { Run } from '../run';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-run-details',
  templateUrl: './run-details.component.html',
  styleUrls: ['./run-details.component.css']
})
export class RunDetailsComponent implements OnInit {
  run: Run = {
    distance: 21.41,
    pace: '4:10'
  };

  constructor() { }

  ngOnInit() {
    var lineDrawing = anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 6000,
      delay: function(el, i) {
        return i * 250;
      },
      direction: "linear",
      endDelay: 1000,
      loop: true
    });

    /* var objPropLogEl = document.querySelector('.stats');

    anime({
      targets: this.run,
      distance: 50,
      easing: 'linear',
      round: 1,
      update: function() {
        objPropLogEl.innerHTML = JSON.stringify(this.run);
      }
    });
    */
  }

}
