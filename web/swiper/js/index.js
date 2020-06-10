window.onload = function(){
  let box = document.getElementsByClassName('box')[0];
  let swiper = document.getElementsByClassName('swiper')[0];
  let slider = document.getElementsByClassName('slider');

  //
  // console.log(slider[0].offsetLeft)
  // console.log(slider[1].offsetLeft)
  // console.log(slider[2].offsetLeft)
  // console.log(slider[3].offsetLeft)
  //
  // console.log(slider[0].style.left)
  // console.log(slider[1].style.left)
  // console.log(slider[2].style.left)
  // console.log(slider[3].style.left)
  //
  // console.log(slider[3])
  // slider[3].style.left = -(slider[0].style.offsetLeft - 300) + 'px'


  let time = null;
  let index = 1;
  let left = box.clientWidth;
  // console.log(left)

  function _reset(){
      // window.clearInterval(time);
      // index = -1;
      if(index > 4){
        index = 1;
        swiper.style.transition = 'none';
        swiper.style.marginLeft = 0 +'px';
      }else{
        index++;
      }

  }

  function _goslider(){

    swiper.style.transition = 'all .8s';
    swiper.style.marginLeft = -(left*index) + 'px';
  }

  function _autoslider(){
    // if(time){
    //   window.clearINterval(time);
    // }
    time=setInterval(function(){
      _goslider();
        _reset();
      // console.log(index)
      // console.log(swiper.style.marginLeft)
    },1000);

  }

  _autoslider();



  // console.log(swiper.clientWidth)


  // time = setInterval(function(){
  //
  //
  //   console.log(index)
  //   if(index > 4){
  //
  //   }
  //
  // },1000);

}
