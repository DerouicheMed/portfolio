import { Component, OnInit, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css'],
})
export class ServiceBoxComponent implements OnInit {
  @Input() service;
  toggleBox = false;

  constructor() {}

  ngOnInit(): void {}

  toggleServiceBox = (serviceId) => {
    switch (serviceId) {
      case 'service-1': {
        if (this.toggleBox) {
          $('#service-1').removeClass('expand-box');
          $('.btn-contact').addClass('d-none');
        } else {
          $('#service-1').addClass('expand-box');
          $('.btn-contact').removeClass('d-none');
        }
        this.toggleBox = !this.toggleBox;
        break;
      }
      case 'service-2': {
        if (this.toggleBox) {
          $('#service-2').removeClass('expand-box');
          $('.btn-contact').addClass('d-none');
        } else {
          $('#service-2').addClass('expand-box');
          $('.btn-contact').removeClass('d-none');
        }
        this.toggleBox = !this.toggleBox;
        break;
      }
      case 'service-3': {
        if (this.toggleBox) {
          $('#service-3').removeClass('expand-box');
          $('.btn-contact').addClass('d-none');
        } else {
          $('#service-3').addClass('expand-box');
          $('.btn-contact').removeClass('d-none');
        }
        this.toggleBox = !this.toggleBox;
        break;
      }
    }
  };

  onMouseEnter = (serviceId) => {
    switch (serviceId) {
      case 'service-1': {
        $('#service-1').addClass('maximize-service-box');
        $('#service-2').addClass('minimize-service-box');
        $('#service-3').addClass('minimize-service-box');
        break;
      }
      case 'service-2': {
        $('#service-1').addClass('minimize-service-box');
        $('#service-2').addClass('maximize-service-box');
        $('#service-3').addClass('minimize-service-box');
        break;
      }
      case 'service-3': {
        $('#service-1').addClass('minimize-service-box');
        $('#service-2').addClass('minimize-service-box');
        $('#service-3').addClass('maximize-service-box');
        break;
      }
    }
  };
  onMouseOut = (serviceId) => {
    switch (serviceId) {
      case 'service-1': {
        $('#service-1').removeClass('maximize-service-box');
        $('#service-2').removeClass('minimize-service-box');
        $('#service-3').removeClass('minimize-service-box');
        break;
      }
      case 'service-2': {
        $('#service-1').removeClass('minimize-service-box');
        $('#service-2').removeClass('maximize-service-box');
        $('#service-3').removeClass('minimize-service-box');
        break;
      }
      case 'service-3': {
        $('#service-1').removeClass('minimize-service-box');
        $('#service-2').removeClass('minimize-service-box');
        $('#service-3').removeClass('maximize-service-box');
        break;
      }
    }
  };
}
