window.onload=function(){
  let btn=document.getElementsByClassName('btn')[0];
  let msgbox=document.getElementsByClassName('msgbox')[0];
  let close=document.getElementsByClassName('close')[0];

  let timer=null;
  btn.onclick=function(){
    if(timer){
      window.clearTimeout(timer);
    }

    msgbox.style.display='block';
    timer=window.setTimeout(function(){
      msgbox.style.display='none';
    },3000);
  }
  close.onclick=function(){
    msgbox.style.display='none';
    window.clearTimeout(timer);
  }

}
