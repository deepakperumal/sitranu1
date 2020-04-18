import { Component } from "@angular/core";
declare var $: any;
import { Router }  from '@angular/router';

@Component({
  templateUrl: "../../views/home/home.component.html"
})
export class HomeComponent {
  public counterNumbers = [25,50,34,80];
  constructor(private router : Router) {}
  ngOnInit() {}

  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
