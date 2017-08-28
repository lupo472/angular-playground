import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() app_root_message;

  onClick(value) {
    console.log('Button clicked!' + ' ' + value);
  }

  constructor() { }

  ngOnInit() {
  }

}
