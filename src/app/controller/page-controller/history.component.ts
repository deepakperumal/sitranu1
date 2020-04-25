import { Component } from '@angular/core';
import { Router } from '@angular/router';
 declare var $: any;

@Component({
  templateUrl: '../../views/history/history.component.html',
})
export class HistoryComponent {

  constructor(private router :Router) { }
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
      if($(this).attr('data-id')==parts){
      $(this).addClass('active')
      }
    })
  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }

}
