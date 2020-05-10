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
    const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const toggle = document.querySelector('#myonoffswitch');
let auto = true; // Auto scroll
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    var current = document.querySelector('.current');
    if(!current){
      prevSlide()
    $('.slide1').addClass('current')
    current = document.querySelector('.current');
    }
    console.log(current)
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibiling
        current.nextElementSibling.classList.add('current');
    }
    else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    var current = document.querySelector('.current');
    if(!current){
    $('.slide1').addClass('current')
    current = document.querySelector('.slide1');
    }
    console.log(current)
    // Remove current class
    current.classList.remove('current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.previousElementSibling) {
        // Add current to prev sibiling
        current.previousElementSibling.classList.add('current');
    }
    else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
		if(auto) {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, intervalTime);
		}
})
prev.addEventListener('click', e => {
    prevSlide();
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
})

// Auto slide toggle
toggle.addEventListener('click', e => {
  
			auto = true;
			slideInterval = setInterval(nextSlide, intervalTime);
   
})

// Auto slide
if(auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
}
  }

  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
