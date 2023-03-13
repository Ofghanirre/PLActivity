import {Component} from '@angular/core';
import {EpLayoutProviderSuperClass} from '../../ep-layout-provider.superclass';


enum SELECTED {
  STATEMENT = 0,
  FORM,
  FEEDBACK
}


@Component({
  selector: 'ep-layout-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends EpLayoutProviderSuperClass {

  selected : SELECTED = SELECTED.STATEMENT;
}
