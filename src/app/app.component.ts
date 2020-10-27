import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnChanges, OnInit {
  @Input() appInput: any; // --> app-input
  @Output() appOutput = new EventEmitter(); // --> Custom event in DOM
  title = 'ngWebComponent';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.appInput);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.appOutput.emit('output');
    });
  }

  slotChanged(evt: Event) {
    const assigned = (evt.target as HTMLSlotElement).assignedNodes();
    if (assigned.length) {
      console.log(assigned[0]);
    }
  }
}
