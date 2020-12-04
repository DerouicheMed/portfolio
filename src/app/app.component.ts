import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /** this variable storage if every page has been loaded once */
  isLoaded = {
    home: false,
    services: false,
    about: false,
    contact: false,
    socials: false,
  };

  /** this variable is used to display the loader */
  displayLoader = false;

  /**
   * This function take the route url and checks if it has been loaded. if not, a loader will be displayed
   * @param routeURL
   */
  checkIfLoaded = (routeURL) => {
    switch (routeURL) {
      case '/':
        if (!this.isLoaded.home) {
          this.displayLoader = true;
          this.isLoaded.home = true;
        }
        break;
      case '/services':
        if (!this.isLoaded.services) {
          this.displayLoader = true;
          this.isLoaded.services = true;
        }
        break;
      case '/about':
        if (!this.isLoaded.about) {
          this.displayLoader = true;
          this.isLoaded.about = true;
        }
        break;
      case '/contact':
        if (!this.isLoaded.contact) {
          this.displayLoader = true;
          this.isLoaded.contact = true;
        }
        break;
      case '/socials':
        if (!this.isLoaded.socials) {
          this.displayLoader = true;
          this.isLoaded.socials = true;
        }
        break;
    }
    setTimeout(() => {
      this.displayLoader = false;
    }, 2100);
  };

  /**
   * This function return the browser's type
   */
  getBrowserName = () => {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  };

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        console.log(route.url);
        this.checkIfLoaded(route.url);
      }
    });
  }
  ngOnInit(): void {
    if (this.getBrowserName() === 'ie') {
      this.router.navigate(['error']);
    }
  }
}
