import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isLoaded: boolean = false;
  projects = [
    {
      id: 6,
      title: 'GetYourBookNow',
      github: 'https://github.com/DerouicheMed/getyourbooknow-react-app',
      website: 'https://www.getyourbooknow.tk',
      description: 'A web app for searching and buying ebooks',
      technologies: `React js, Node js, express js, MongoDB, Paypal API `,
      screenshots: [
        '/getyourbooknow/1',
        '/getyourbooknow/2',
        '/getyourbooknow/3',
      ],
    },
    {
      id: 5,
      title: 'Daadiphotography',
      github: 'https://github.com/DerouicheMed/Customy',
      website: 'https://www.daadiphotography.ml',
      description: 'A photography portfolio',
      technologies: `HTML, CSS, JavaScript/JQuery, Bootstrap 4`,
      screenshots: [
        '/daadiphotography/1',
        '/daadiphotography/2',
        '/daadiphotography/3',
      ],
    },
    {
      id: 1,
      title: 'Voice of Customer System',
      github: 'https://github.com/DerouicheMed/Customy',
      website: 'not hosted',
      description:
        'A web app for creating and publishing surveys and analysing client data.',
      technologies: `React js, Node js, Express js, MongoDB`,
      screenshots: ['/customy/1', '/customy/2', '/customy/3'],
    },
    {
      id: 2,
      title: 'ThinkForum a Q&A Forum',
      github: 'private',
      website: 'not hosted',
      description:
        'A Q&A web forum with voting and email notifications features ',
      technologies: `Angular 7, Spring boot 2.x, Spring Security, Hibernate, JPA, PostegreSQL, Liquibase`,
      screenshots: ['/thinkforum/1', '/thinkforum/2', '/thinkforum/3'],
    },
    {
      id: 3,
      title: 'Customer Relationship Management System',
      github: 'private',
      website: 'not hosted',
      description:
        'A web app for creating and publishing surveys and analysing client data.',
      technologies: `Angular 7, Java/JEE, Hibernate, JPA, MySql`,
      screenshots: ['/crm/1', '/crm/2', '/crm/3'],
    },
    {
      id: 4,
      title: 'Monographs and Press reviews Management System',
      github: 'private',
      website: 'not hosted',
      description:
        'A management system that automates documents distribution inside the OMMP ',
      technologies: `Spring MVC, Hibernate, JPA, Bootstrap, JavaScript/JQuery Oracle DB`,
      screenshots: ['/ommp/1', '/ommp/2', '/ommp/3'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  navigateTo = () => {
    var win = window.open('https://www.fiverr.com/derouichemed', '_blank');
    win.focus();
  };
}
