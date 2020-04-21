import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: '../views/footer.component.html'
})
export class FooterComponent {

  constructor(private router:Router) { }
  ngOnInit() {

  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
