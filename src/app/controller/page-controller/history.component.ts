import { Component } from '@angular/core';
import { Router } from '@angular/router';
// declare var $: any;

@Component({
  templateUrl: '../../views/history/history.component.html',
})
export class HistoryComponent {

  constructor(private router :Router) { }
  ngOnInit() {
  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }

}
