import {Component} from '@angular/core';
import {loadedJsonExamples} from "./loadedJsonExamples";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLActivity';
  selectedExampleId: string = "";
  selectedExample : any;
  constructor() {
    this.loadedExample = new Map<string, any>();
    loadedJsonExamples.forEach(value => {
      this.loadedExample.set(value.id, value);
    });
  }
  loadedExample: Map<string, any>;

  onSelectExample() {
    this.selectedExample = this.loadedExample.get(this.selectedExampleId);
  }
}
