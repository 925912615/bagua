window.onload=function(){
  let div1=document.getElementById('div1');


  let disX=0;
  let disY=0;
  let l=0;
  let t=0;
  div1.onmousedown=function(ev){

    disX=ev.clientX-div1.offsetLeft;
    disY=ev.clientY-div1.offsetTop;
    div1.style.cursor='move';
    document.onmousemove=function(ev){
      l=ev.clientX-disX;
      t=ev.clientY-disY;

      // 限制div不能拖出浏览器外
      // if(l<0){
      //   l=0;
      // }else if(l>document.documentElement.clientWidth-div1.offsetWidth){
      //   l=document.documentElement.clienWidth-div1.offsetWidth;
      // }
      //
      // if(t<0){
      //   t=0;
      // }else if(t>document.documentElement.clientHeight-div1.offsetHeight){
      //   t=document.documentElement.clientHeight-div1.offsetHeight;
      // }

      //div靠近边缘自动吸附
      if(l<50){
        l=0;
      }else if(l>document.documentElement.clientWidth-div1.offsetWidth){
        l=document.documentElement.clienWidth-div1.offsetWidth;
      }

      if(t<50){
        t=0;
      }else if(t>document.documentElement.clientHeight-div1.offsetHeight){
        t=document.documentElement.clientHeight-div1.offsetHeight;
      }

      console.log(ev)
      div1.style.left=l+'px';
      div1.style.top=t+'px';
    }
    document.onmouseup=function(){
      document.onmousemove=null;
      document.onmouseup=null;
      div1.style.cursor='default';
    }
    return false;
  }

}
