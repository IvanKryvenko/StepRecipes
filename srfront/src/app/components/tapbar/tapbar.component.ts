import { ItemsList } from './navbar-item-list';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/interfaces/navbar-items';

@Component({
  selector: 'app-tapbar',
  templateUrl: './tapbar.component.html',
  styleUrls: ['./tapbar.component.scss']
})
export class TapbarComponent implements OnInit {
  navItems: NavItem[];
  navItemRoute: string | undefined;

  constructor(public readonly route: Router) {
    this.navItems = ItemsList;
  }

  ngOnInit(): void {
    this.navItemRoute = this.route.url;
  }

  setActiveItem(): void {
    this.navItemRoute = this.route.url;
  }
}
