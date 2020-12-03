import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  indicator = '10000';
  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        this.navigateTo(route.url);
      }
    });
  }

  ngOnInit(): void {}

  navigateTo(destination: string) {
    switch (destination) {
      case '/': {
        this.indicator = '10000';
        break;
      }
      case '/services': {
        this.indicator = '01000';
        break;
      }
      case '/about': {
        this.indicator = '00100';
        break;
      }
      case '/contact': {
        this.indicator = '00010';
        break;
      }
      case '/socials': {
        this.indicator = '00001';
        break;
      }
      default:
        null;
    }
  }
}
