window.onload=function(){
  let progress=document.getElementsByClassName('progress')[0];
  let progress_bar=document.getElementsByClassName('progress_bar')[0];
  let btn1=document.getElementById('btn1');
  let btn2=document.getElementById('btn2');


  let timer=null;
  let speed=3;
  btn1.onclick=function(){
    move();
  }

  function move(){
    if(timer){
      window.clearInterval(timer);
    }
    timer=setInterval(function(){
      if(progress_bar.offsetWidth >= progress.offsetWidth){
        window.clearInterval(timer);
      }else{
        progress_bar.style.width=progress_bar.offsetWidth+speed+'px';
        btn2.innerHTML=parseInt(progress_bar.offsetWidth/progress.offsetWidth*100)+'%';
      }
    },30);
  }


}
