import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  service_1 = {
    heading: 'Add Flavor To Your Website',
    paragraph: `Redesign your existing website to give it the look and feel of sophistication worthy of the person you are.
       You don't have a website ? no worries, we'll start from scratch`,
    id: 'service-1',
  };
  service_2 = {
    heading: `Realise The Project You've Always Wanted`,
    paragraph: `You have the perfect idea but you don't have the time nor the resources ? 
    We will turn that idea to the project you've always wanted. From bottom to top, a full functional web app for you dream business. `,
    id: 'service-2',
  };
  service_3 = {
    heading: 'Improve Your Traffic Quality',
    paragraph: `Your website does't show on google when you search it ? You can't attract the visitors you want ? 
      We'll make sure your website is SEO-friendly and well indexed by google  `,
    id: 'service-3',
  };

  constructor() {}

  ngOnInit(): void {}
}
