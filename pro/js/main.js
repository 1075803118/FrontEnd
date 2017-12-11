function scroll(wraper,next,prev){ 
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var obj = wraper.find('div.con-list');
  var w = obj.outerWidth(true);
  prev.click(function()
       {
        wraper.find('div.con-list:last').prependTo(wraper);
        wraper.css({'margin-left':-w});
         wraper.animate({'margin-left':0});
        
        });
 next.click(function()
       {
       /*wraper.animate({'margin-left':-w},function()
                  {
                   wraper.find('div.con-list').eq(0).appendTo(wraper);                
                   wraper.css({'margin-left':0});
                   });*/
  wraper.find('div.con-list').eq(0).appendTo(wraper);
        wraper.css({'margin-left':0});
         wraper.animate({'margin-left':-w});
        
        });
 }
  scroll('#con_boxul_1','.js_con-cnext_1','.js_con-cprev_1');
  scroll('#con_boxul_2','.js_con-cnext_2','.js_con-cprev_2');
  scroll('#con_boxul_3','.js_con-cnext_3','.js_con-cprev_3');
  scroll('#con_boxul_4','.js_con-cnext_4','.js_con-cprev_4');
 

 //轮播
 function banner(list,con,c,t){
        var n=1;
        var TimeInterval;
        list.each(function(i,item){
             
            $(this).mouseover(function(){
                          con.hide().eq(i).show();
                list.removeClass(c);
                $(this).addClass(c);
                window.clearInterval(TimeInterval);
            }).mouseout(function(){
                     n = i+1;
                     TimeInterval = window.setInterval(autoshow,t);
            });
                
        })
        
              TimeInterval = window.setInterval(autoshow,t);
      function autoshow(){
              if(n>list.length-1)n=0;
              con.hide().eq(n).show();
              list.removeClass(c).eq(n).addClass(c);
              n++;
        }
        
    }
   banner($(".bannerc-list a"),$(".bannerimg-ul li"),"cur",2000);

 //hover
$(function(){    
  
   $(".js-hoverdiv").mouseover(function(){
    $(this).children(".js-t2").show();
    $(this).children(".js-t1").hide();
   })
    $(".js-hoverdiv").mouseout(function(){
    $(this).children(".js-t1").show();
    $(this).children(".js-t2").hide();
   })

   })

//placeholder
$(function(){
        if(!placeholderSupport()){ 
            $('[placeholder]').focus(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                        input.removeClass('placeholder');
                }
            }).blur(function() {
                    var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.addClass('placeholder');
                        input.val(input.attr('placeholder'));
                    }
            }).blur();
        };

})
function placeholderSupport() {
       return 'placeholder' in document.createElement('input');
}
