import { Component } from '@angular/core';
import { Router }  from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: '../views/header.component.html'
})
export class HeaderComponent {

  constructor(private router : Router) { }
  ngOnInit() {
    $(document).ready(function() {
     $('.logo1').click(function(e){
        $('#navbarTogglerDemo01').toggle()
      })
   });
   
 }

  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
 