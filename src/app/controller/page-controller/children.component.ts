import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../views/children/children.component.html',
})
export class ChildrenComponent {

  constructor() { }
  ngOnInit() {

    $(document).ready(function() {
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
