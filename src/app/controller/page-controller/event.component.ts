import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  templateUrl: '../../views/events/events.component.html',
})
export class EventComponent {

  constructor(private router:Router) { }
  ngOnInit() { 
    $(window).scrollTop(0);
    $(window).scroll(function() {
      $(".load-more-content").each( function() {
          if( $(window).scrollTop() > $(this).offset().top - 300 ) {
              $(this).css('opacity',1);
          } else {
              $(this).css('opacity',0);
          }
      }); 
  });
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
  redirect(pagename: string) {
    localStorage.setItem("url",'event');
    this.router.navigate(['/'+pagename]);
  }

}
