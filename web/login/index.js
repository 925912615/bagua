
window.onload = function(){
  box1 = document.getElementsByClassName('box1')[0];
  box2 = document.getElementsByClassName('box2')[0];
  box3 = document.getElementsByClassName('box3')[0];
  btn1 = document.getElementsByClassName('btn1')[0];
  btn2 = document.getElementsByClassName('btn2')[0];
  txt1 = document.getElementsByClassName('txt1')[0];
  txt2 = document.getElementsByClassName('txt2')[0];
  txt3 = document.getElementsByClassName('txt3')[0];
  txt4 = document.getElementsByClassName('txt4')[0];
  txt5 = document.getElementsByClassName('txt5')[0];
  p1 = document.getElementsByClassName('p1')[0];
  p2 = document.getElementsByClassName('p2')[0];

  let userarry = [1,2,3,4,5,6,7];
  // console.log(box1,box2)

    btn1.onclick = function(){
      if(
        txt1.value !== "" && txt2.value !== "" && txt3.value !== "" &&
        txt2.value === txt3.value
      ){
        let txt1val = txt1.value;
        let txt2val = txt2.value;
        let txtobj = {id:txt1val,pass:txt2val};
        userarry.push(txtobj);
        box1.style.display = 'none';
        p1.style.display = 'block';
        setTimeout(function(){
          p1.style.display = 'none';
          box2.style.display = 'block';
        },3000);
        // console.log(userarry);
      }else{
          alert("请输入正确的账号密码！")
      }
    }

    btn2.onclick = function(){
      if(
        txt4.value !== "" && txt5.value !== ""
      ){
        let txt4val = txt1.value;
        let txt5val = txt2.value;
        let txtobj1 = {id:txt4val,pass:txt5val};

        // userarry.push(txtobj1);
        // console.log(txtobj1);
        // console.log(userarry);
        // console.log( userarry.includes(txtobj1) );
        // console.log( userarry.indexOf(txtobj1) );
        let obj = false;
        for(var item in userarry){
          if(userarry[item].id == txtobj1.id && userarry[item].pass == txtobj1.pass)
            // console.log('234');
            // return obj = true;
            obj = true;
        }
        // console.log('123');
        if(obj){
          // console.log(userarry=true);
          box2.style.display = 'none';
          p2.style.display = 'block';
          setTimeout(function(){
            p2.style.display = 'none';
            box3.style.display = 'block';
          },3000);
        }else{
          alert("账号密码输入不正确！");
        }

      }else{
        alert("账号密码输入不正确！");
      }
    }
}
