window.onload=function(){
  let checkbox=document.getElementsByName('checkbox');
  let btn1=document.getElementById('btn1');
  let btn2=document.getElementById('btn2');
  let btn3=document.getElementById('btn3');


  btn1.onclick=function(){
    for(let i=0; i<checkbox.length; i++){
      checkbox[i].checked = true;
    }
  }
  btn2.onclick=function(){
    for(let i=0; i<checkbox.length; i++){
      checkbox[i].checked = false;
    }
  }
  btn3.onclick=function(){
    for(let i=0; i<checkbox.length; i++){
      if(checkbox[i].checked==true){
        checkbox[i].checked=false;
      }else{
        checkbox[i].checked=true;
      }
    }
  }
}
