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