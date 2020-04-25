import { Component } from "@angular/core";
declare var $: any;
import { Router }  from '@angular/router';

@Component({
  templateUrl: "../../views/home/home.component.html"
})
export class HomeComponent {
  public counterNumbers = [25,50,34,80];
  constructor(private router : Router) {}
  ngOnInit() {
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
      if($(this).attr('data-id')==parts)
      $(this).addClass('active')
    })
  }

  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
