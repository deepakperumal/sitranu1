import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../../views/about-us/about-us-detail.component.html',
})
export class AboutDetailComponent {

  constructor() { }
  ngOnInit() {
    $(window).scrollTop(0); 
    $(window).scrollTop(0);
    var url = $(location).attr('href')
    var parts = url.split("/");
    var last_part = parts[parts.length-2];
    $('.navbar-nav').find('li').each(function(e){
      $(this).removeClass('active')
    })
    parts = parts[3]
    if(!parts)
    parts='home'
    console.log(parts)
    $('.navbar-nav').find('li').each(function(e){
      if($(this).attr('data-id')=='about')
      $(this).addClass('active')
    })
    
  }

}
