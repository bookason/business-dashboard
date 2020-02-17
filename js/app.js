$(document).ready(function(){

    //Making Caret rotate
    $('.caret').click(function(e){
        $(this).toggleClass('active');
    })


    // Giving top menu icons background color on click
    // Making hidden submenu appear
    $('.toggler').click(function(e){
        $(this).toggleClass('show').siblings().removeClass('show');

        $('.top-nav > .user > span >ul').toggleClass('show');
    })
    
    $('.top-nav > .user > span > ul').click(function(event){
        event.stopPropagation();
        $('div#three').toggle()
      });
    
      //Collapse Sidebar
      $('.collapse-icon').click(function(){
          $('.sidebar').toggleClass('sidebar-collapse');
          $('.main-side-content').toggleClass('main-collapse').toggleClass('col-md-9');

          //Collapse open sidebar submenu
          $('.caret.active').click();
          
      });

      //Toggling sidebar and top-nav menu on mobile

      $('.ellipsis').click(function(){
          $('.top-nav').toggleClass('show');
      })

      $('.bar').click(function(){
          $('.sidebar').toggleClass('show');
          $('.mobile-overlay').toggleClass('show');
          $('.caret.active').click();
      })

      //Making notification, setting and admin sub menu disappear
     // when someone clicks outside of them.
      $('html').click(function(e){
          let id = e.target.id
          if(typeof(id) =="string" && id!=='2'){
            $('.toggler.show').click();
          }
      })
      let date = new Date();

      document.getElementById('year').innerHTML = date.getFullYear();

    });