import { Component, Input, OnInit } from '@angular/core';

import { Alert } from '../../modelo/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers: []
})
export class AlertComponent implements OnInit {

  @Input() alerts: Array<Alert>;

  constructor() { }

  ngOnInit() {
  }


}
