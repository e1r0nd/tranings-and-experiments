import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<p>servers works!</p>
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
