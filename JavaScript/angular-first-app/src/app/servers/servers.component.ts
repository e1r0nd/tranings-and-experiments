import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Alpha', 'Beta'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Created a server: ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
