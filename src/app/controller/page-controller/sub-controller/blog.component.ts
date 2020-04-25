import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../../views/history/blog.component.html',
})
export class BlogComponent {

  constructor() { }
  ngOnInit() {
    $(window).scrollTop(0);
  }

}
