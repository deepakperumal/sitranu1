import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../../views/events/event-detail.component.html',
})
export class EventDetailComponent {

  constructor() { }
  ngOnInit() {
    $(window).scrollTop(0);
  }

}
