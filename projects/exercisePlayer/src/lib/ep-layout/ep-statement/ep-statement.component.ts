import {Component, Input} from '@angular/core';

@Component({
  selector: 'ep-statement',
  template: '<markdown>{{ statement }}</markdown>',
})
export class EpStatementComponent {
  @Input() statement!: string;
}
