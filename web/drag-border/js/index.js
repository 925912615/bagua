window.onload=function(){
  let div1=document.getElementById('div1');

  div1.onmousedown=function(e){
    let disX=e.clientX-div1.offsetLeft;
    let disY=e.clientY-div1.offsetTop;

    //添加带框div
    let box=document.createElement('div');
    box.className='box';
    document.body.appendChild(box);

    //给新添的div设置宽高
    box.style.width=div1.offsetWidth-2+'px';
    box.style.height=div1.offsetHeight-2+'px';

    //初始化带框div，鼠标按下的时候让他的位置与实体位置相等
    box.style.left=div1.offsetLeft+'px';
    box.style.top=div1.offsetTop+'px';

    document.onmousemove=function(e){
      let l=e.clientX-disX;
      let t=e.clientY-disY;

      //鼠标按下并移动的时候让带框div跟着移动
      box.style.left=l+'px';
      box.style.top=t+'px';
    }

    document.onmouseup=function(){
      //鼠标抬起的时候让实体与带框div位置相等并删除带框div
      div1.style.left=box.offsetLeft+'px';
      div1.style.top=box.offsetTop+'px';
      document.body.removeChild(box);

      //鼠标抬起的时候把鼠标移动跟鼠标抬起事件去掉
      document.onmousemove=null;
      document.onmouseup=null;
    }
     return false;
  }
}
