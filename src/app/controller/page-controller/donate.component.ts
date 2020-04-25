import { Component ,ChangeDetectorRef} from '@angular/core';
 declare var $: any;
 import { ExternalLibraryService } from './util';

declare let Razorpay: any;

@Component({
  templateUrl: '../../views/donate/donate.component.html',
})
export class ContactComponent {
  amnt: number;    

  constructor(private razorpayService: ExternalLibraryService, private cd:  ChangeDetectorRef) { }
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;
 
  ngOnInit() {
    this.razorpayService
    .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
    .subscribe();
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
  RAZORPAY_OPTIONS = {
    "key": "rzp_test_WMHWnR6EYJOqTX",
    "amount": "",
    "name": "Novopay",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "test@test.com",
      "contact": "",
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = this.amnt + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('razorpay-response').style.display = 'block';
  }

  public test() {
    document.getElementById('response-modal').style.display = 'block';
    this.response = `dummy text`;
  }
}
