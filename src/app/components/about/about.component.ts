import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  projects = [
    {
      id: 6,
      title: 'GetYourBookNow',
      github: 'https://github.com/DerouicheMed/getyourbooknow-react-app',
      website: 'https://www.getyourbooknow.tk',
      description: 'A web app for searching and buying ebooks',
      technologies: `React js, Node js, express js, MongoDB, Paypal API `,
      screenshots: [
        '/getyourbooknow/1.jpg',
        '/getyourbooknow/2.jpg',
        '/getyourbooknow/3.jpg',
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
        '/daadiphotography/1.jpg',
        '/daadiphotography/2.jpg',
        '/daadiphotography/3.jpg',
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
      screenshots: [
        '/customy/survey1.png',
        '/customy/survey2.png',
        '/customy/survey3.png',
      ],
    },
    {
      id: 2,
      title: 'ThinkForum a Q&A Forum',
      github: 'private',
      website: 'not hosted',
      description:
        'A Q&A web forum with voting and email notifications features ',
      technologies: `Angular 7, Spring boot 2.x, Spring Security, Hibernate, JPA, PostegreSQL, Liquibase`,
      screenshots: [
        '/thinkforum/1.jpg',
        '/thinkforum/2.jpg',
        '/thinkforum/3.jpg',
      ],
    },
    {
      id: 3,
      title: 'Customer Relationship Management System',
      github: 'private',
      website: 'not hosted',
      description:
        'A web app for creating and publishing surveys and analysing client data.',
      technologies: `Angular 7, Java/JEE, Hibernate, JPA, MySql`,
      screenshots: ['/crm/1.jpg', '/crm/2.jpg', '/crm/3.jpg'],
    },
    {
      id: 4,
      title: 'Monographs and Press reviews Management System',
      github: 'private',
      website: 'not hosted',
      description:
        'A management system that automates documents distribution inside the OMMP ',
      technologies: `Spring MVC, Hibernate, JPA, Bootstrap, JavaScript/JQuery Oracle DB`,
      screenshots: [
        '/ommp/1.jpg',
        '/ommp/2.jpg',
        '/ommp/3.jpg',
        '/ommp/4.jpg',
        '/ommp/5.jpg',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  navigateTo = () => {
    var win = window.open('https://www.fiverr.com/derouichemed', '_blank');
    win.focus();
  };
}
