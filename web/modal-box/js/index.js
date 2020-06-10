window.onload=function(){
  box=document.getElementsByClassName('box')[0];
  close=document.getElementsByClassName('close')[0];
  cancel=document.getElementsByClassName('cancel')[0];
  sure=document.getElementsByClassName('sure')[0];
  mask=document.getElementsByClassName('mask')[0];
  btn=document.getElementsByClassName('btn')[0];

  let count=false;
  function closed(){
    count=false;
    box.className='box hide';
    mask.className='mask maskhide';
    box.addEventListener('animationend',function(){
      if(!count){
        box.style.display='none';
      }
    },false)
    mask.addEventListener('animationend',function(){
      if(!count){
        mask.style.display='none';
      }
    },false)
  }
  function show(){
    count=true;
    box.style.display='block';
    mask.style.display='block';
    box.className='box show';
    mask.className='mask maskshow';
    box.removeEventListener('animationend',function(){},false);
  }


  close.onclick=function(){
    closed();
  }
  cancel.onclick=function(){
    closed();
  }
  sure.onclick=function(){
    closed();
  }
  mask.onclick=function(){
    closed();
  }
  btn.onclick=function(){
    show();
  }

}
