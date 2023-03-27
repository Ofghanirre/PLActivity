import {Component, Input, OnInit} from '@angular/core';
import {CExercise, getTagColor} from './models/const';
import {ExercisePlayerService} from "./exercise-player.service";

@Component({
  selector: 'lib-exercisePlayer',
  templateUrl: 'exercise-player.component.html',
  styleUrls: [
    'exercise-player.component.scss',
  ]
})
export class ExercisePlayerComponent implements OnInit {

  @Input() exercise = CExercise;
  context = "Activity/l1/platon"



  color(str : string) {
    return getTagColor(str);
  }

  constructor(private service: ExercisePlayerService) {
    service.getExercise("0");
  }

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
