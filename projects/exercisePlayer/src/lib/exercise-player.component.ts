import {Component, OnInit} from '@angular/core';
import {CExercise, getTagColor} from './models/const';

@Component({
  selector: 'lib-exercisePlayer',
  templateUrl: 'exercise-player.component.html',
  styleUrls: [
    'exercise-player.component.scss',
  ]
})
export class ExercisePlayerComponent implements OnInit {


  exercise = CExercise;
  context = "Activity/l1/platon"



  color(str : string) {
    return getTagColor(str);
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }


  log() {
    console.log("Output : {\n");
    this.exercise.formArray.forEach(form => {
      console.log(JSON.stringify(form.output));
    });
    console.log("}");
  }
}
