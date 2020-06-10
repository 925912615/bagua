window.onload=function(){
  // let box=document.getElementsByClassName('box');
  let tab_row=document.getElementsByClassName('tab_row');
  let tab_bar=document.getElementsByClassName('tab_bar');
  let tab_cont=document.getElementsByClassName('tab_cont');


    for(let i=0; i<tab_bar.length; i++){
      tab_bar[i].index=i;
      tab_bar[i].onclick=function(){
        for(let i=0; i<tab_bar.length; i++){
          tab_bar[i].className='tab_bar';
          tab_cont[i].style.display='none';
        }
        this.className='tab_bar active';
        tab_cont[tab_bar[i].index].style.display='block';
    }
  }
}
