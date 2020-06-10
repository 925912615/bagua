window.onload=function(){
  let btn=document.getElementsByClassName('btn')[0];
  let switch1=document.getElementsByClassName('switch')[0];


 //通过控制input选中状态来执行回调函数，然后呢做你想做的事情。。。。
  btn.onclick=function(){
    if(this.checked==true){
      switch1.style.background='green';
      switch1.style.borderColor='green';
    }else{
      switch1.style.background='red';
      switch1.style.borderColor='red';
    }
  }
}
