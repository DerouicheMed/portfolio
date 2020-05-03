import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  projects = [
    {
      title: 'Voice of customer System',
      link: 'link',
      description: `Technologies : React js, Node js, Express js, MongoDB`,
    },
    {
      title: 'Customer Relationship Management System',
      link: 'link',
      description: `Technologies : Angular 7, Java/JEE, Hibernate, JPA, MySql`,
    },
    {
      title: 'Q&A internal forum',
      link: 'link',
      description: `Technologies: Angular 7, Spring boot 2.x, Spring Security, Hibernate, JPA, PostegreSQL, Liquibase`,
    },
    {
      title: 'Freelancing platform',
      link: 'link',
      description: `Technologies: Java/JavaFX, Symfony 3.4, Codename One mobile library, MySQL DB`,
    },
    {
      title: 'Monographs and press reviews management system',
      link: 'link',
      description: `Technologies: Spring MVC, Hibernate, JPA, Bootstrap, JavaScript/JQuery Oracle DB`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  navigateTo = () => {
    var win = window.open('https://www.fiverr.com/derouichemed', '_blank');
    win.focus();
  };
}
