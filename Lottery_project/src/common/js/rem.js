
(function(doc,win){
  var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if(!clientWidth) return;
      if(clientWidth >= 750){
        docEl.style.fontSize = '100px'
      }
      else{
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 匿名函数的调用：
$(function () {

  var  iem = new Vue({
    el :  '#app',
    data:{
      pages:[1,0,0,0,0,0,0,0,0,0],
      nums:[1,2,3,4,5,6,7,8,9,10,11]
    },


    methods:{
      toNext:function (a) {
        this.pages=[0,0,0,0,0,0,0,0,0,0]
        this.pages[a]=1
      },
      showFace:function (b,index) {
        $('.face' + index).css("visibility","hidden");
        $('.face' + index +'-'+ b).css("visibility","visible");
      }
    },
    computed:{

    }

  })
})







