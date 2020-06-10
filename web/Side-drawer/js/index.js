window.onload=function(){
  let side=document.getElementsByClassName('side')[0];
  let btn=document.getElementsByClassName('btn')[0];
  let mask=document.getElementsByClassName('mask')[0];

  btn.onclick=function(){
    side.className='side show';
    mask.style.display='block';
  }
  mask.onclick=function(){
    side.className='side hide';
    mask.style.display='none';
  }

}
