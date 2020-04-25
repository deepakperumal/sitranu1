import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../views/donate/contact.component.html',
})
export class ContactUsComponent {

  constructor() { }
  ngOnInit() {
    $(window).scrollTop(0);
    var url = $(location).attr('href')
    var parts = url.split("/");
    var last_part = parts[parts.length-2];
    $('.navbar-nav').find('li').each(function(e){
      $(this).removeClass('active')
    })
    parts = parts[3]
    $('.navbar-nav').find('li').each(function(e){
      if($(this).attr('data-id')==parts)
      $(this).addClass('active')
    })
  }

}
