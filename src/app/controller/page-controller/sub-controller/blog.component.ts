import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../../views/history/blog.component.html',
})
export class BlogComponent {

  constructor() { }
  ngOnInit() {
    $(window).scrollTop(0);
    $('.navbar-nav').find('li').each(function(e){
      $(this).removeClass('active')
    })
    $('.navbar-nav').find('li').each(function(e){
      if($(this).attr('data-id')==localStorage.getItem("url"))
      $(this).addClass('active')
    })
  }

}
