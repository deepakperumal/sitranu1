import { Component } from '@angular/core';
// declare var $: any;
import { Router } from '@angular/router';

@Component({
  templateUrl: '../../views/events/events.component.html',
})
export class EventComponent {

  constructor(private router:Router) { }
  ngOnInit() { 
  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }

}
