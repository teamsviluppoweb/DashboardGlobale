import { Injectable } from '@angular/core';
import {MatDrawer} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  private matDrawer: MatDrawer;

  setDrawer(drawer: MatDrawer) {
    this.matDrawer = drawer;
  }

  toggle() {
    this.matDrawer.toggle();
  }
}
