window.onload=function(){
  let btn=document.getElementsByClassName('btn')[0];
  let menu=document.getElementsByClassName('menu')[0];

  let count=false;
  btn.onclick=function(e){
    if(count){
      menu.style.display='none';
      count=false;
    }else{
      menu.style.display='block';
      count=true;
    }
    //禁止事件冒泡
    e.cancelBubble=true;
  }

  document.addEventListener('click',function(e){
    if(count){
        menu.style.display='none';
        count=false;
    }
  },false);

  menu.addEventListener('click',function(e){
    //下拉菜单被点击时清除document监听的点击事件
    document.removeEventListener('click',function(){
      //清除监听后的回调函数，不做处理。。
    },false);

    //come on => 做你想做的事情
    //do Events....

    //禁止事件冒泡
    e.cancelBubble=true;
  },false);

}
