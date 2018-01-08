import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = [{name: 'Test server'}, {name: 'Test Server 2'}];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push({name: this.serverName});
    this.serverName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverCreated = false;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
