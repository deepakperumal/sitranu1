import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../views/children/children.component.html',
})
export class ChildrenComponent {

  constructor() { }
  ngOnInit() {

    $(document).ready(function() {
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
      $(document).on('click','.card-donate',function(){
        let id= $(this).attr('data-id')
        if(id==1)
        {
          $("#first").show();
          $("#second").hide();
        }
        else
        {
          $("#first").hide();
          $("#second").show();
        }
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
      })
      
      $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
      });

    });



  } 



  
}
