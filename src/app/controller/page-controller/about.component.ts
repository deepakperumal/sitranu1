import { Component } from '@angular/core';
// declare var $: any;
import { Router }  from '@angular/router';

@Component({
  templateUrl: '../../views/about-us/about-us.component.html',
})
export class AboutComponent {

  constructor(private router:Router) { }
  ngOnInit() {
  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
