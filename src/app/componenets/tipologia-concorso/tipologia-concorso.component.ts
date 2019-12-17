import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../core/services/navbar.service';

@Component({
  selector: 'app-tipologia-concorso',
  templateUrl: './tipologia-concorso.component.html',
  styleUrls: ['./tipologia-concorso.component.scss']
})
export class TipologiaConcorsoComponent implements OnInit {


  constructor(private guestDrawerService: NavbarService) { }

  ngOnInit() {}

  openSidenav() {
    this.guestDrawerService.toggle();
  }
}
