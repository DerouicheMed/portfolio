import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announecement',
  templateUrl: './announecement.component.html',
  styleUrls: ['./announecement.component.css'],
})
export class AnnounecementComponent implements OnInit {
  displayAnnouncement: boolean = true;

  disposeAnnouncement = () => {
    this.displayAnnouncement = false;
  };

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.displayAnnouncement = false;
    }, 20000);
  }
}
