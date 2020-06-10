window.onload=function(){
  let cont=document.getElementsByClassName('cont');
  let menu=document.getElementsByClassName('menu');
  let icon=document.getElementsByClassName('icon');

  //单个点击事件
  // let count=true;
  // icon[0].onclick=function(){
  //   if(count){
  //     cont[0].className='cont show';
  //     count=false;
  //     this.innerHTML='👆';
  //   }else{
  //     cont[0].className='cont hide';
  //     count=true;
  //     this.innerHTML='👇';
  //   }
  // }

  //多个点击事件
  for(let i=0; i<menu.length; i++){
    menu[i].count=true;
    menu[i].index=i;
    menu[i].onclick=function(){
      if(menu[i].count){
        cont[menu[i].index].className='cont show'
        menu[i].count=false;
        icon[menu[i].index].innerHTML='👇';
      }else{
        cont[menu[i].index].className='cont hide'
        menu[i].count=true;
        icon[menu[i].index].innerHTML='👉';
      }
    }
  }

}
