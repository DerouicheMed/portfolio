import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  service_1 = {
    heading: 'Add flavor to your website',
    paragraph: `Redesign your existing website to give it the look and feel of sophistication worthy of the person you are.
       You don't have a website ? no worries, we'll start from scratch`,
    id: 'service-1',
  };
  service_2 = {
    heading: `Realise the project you've always wanted`,
    paragraph: `You have the perfect idea but you don't have the time nor the resources ? 
    We will turn that idea to the project you've always wanted. From bottom to top, a full functional web app for you dream business. `,
    id: 'service-2',
  };
  service_3 = {
    heading: 'Improve your traffic quality',
    paragraph: `Your website does't show on google when you search it ? You can't attract the visitors you want ? 
      We'll make sure your website is SEO-friendly and well indexed by google  `,
    id: 'service-3',
  };
  toggleSlideButton = 'slide-left';

  constructor() {}

  ngOnInit(): void {}

  slideLeft = () => {
    if (this.toggleSlideButton === 'slide-left') {
      var element1 = $('.service-3');
      var element2 = $('.service-1');
      element1.addClass('service-1').removeClass('service-3');
      element2.addClass('service-3').removeClass('service-1');
      $('.service-list').addClass('slide-service-list');
      this.toggleSlideButton = 'slide-right';
    }
  };

  slideRight = () => {
    if (this.toggleSlideButton === 'slide-right') {
      var element1 = $('.service-3');
      var element2 = $('.service-1');
      element1.addClass('service-1').removeClass('service-3');
      element2.addClass('service-3').removeClass('service-1');
      $('.service-list').removeClass('slide-service-list');
      this.toggleSlideButton = 'slide-left';
    }
  };
}
