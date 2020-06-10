window.onload=function(){
  let navigation=document.getElementsByClassName('navigation')[0];
  let pageLeft=document.getElementsByClassName('page-left')[0];
  let pageRight=document.getElementsByClassName('page-right')[0];
  let pageList=document.getElementsByClassName('page-list');

// 初始化列表，给列表添加点击事件
  for(let i=0; i<pageList.length; i++){
    // 给每个列表添加hover样式，让第一个列表为点击状态(css样式为点击状态时没有hover属性)
    pageList[i].className='page-list hover';
    pageList[0].className='page-list active';
    // 当前元素被点击时；添加active样式，其他元素设置为hover属性
    pageList[i].onclick=function(){
      for(let i=0; i<pageList.length; i++){
        pageList[i].className='page-list hover';
      }
      this.className='page-list active';
    }
  }

  // let count=pageList.length-1;
  // console.log(pageList[i+3]==pageList[4]);

  // 右边按钮点击事件
  pageRight.onclick=function(){
    for(let i=0; i<pageList.length; i++){
      // 遍历列表，发现列表中某个元素的 class 中有 active 时退出循环
      if(pageList[i].getAttribute('class')=='page-list active'){
        // 设置当前元素样式为 hover 样式
        pageList[i].className='page-list hover';
        // 判断元素是否在最后一位，如果是=>换行，否则给下一个相邻的元素添加 active 样式
        if(pageList[i]==pageList[pageList.length-1]){
          pageList[0].className='page-list active';
          // 遍历列表，每次换行首位元素原始数值加上列表总长，依次递增相邻的下一个元素
          for(let i=0; i<pageList.length; i++){
            pageList[i].innerHTML= Number(pageList[i].innerHTML)+pageList.length;
          }
        }else{
          // 给下一个相邻的元素添加 active 样式
          pageList[i+1].className='page-list active';
        }

        // console.log(pageList[i+1]);
        return;
      }
      // console.log(pageList[i].getAttribute('class'));
      // pageList[i].innerHTML= Number(pageList[i].innerHTML)+4;
    }
  }

  // 左边按钮点击事件
  pageLeft.onclick=function(){
    for(let i=0; i<pageList.length; i++){
      // 遍历列表，发现列表中某个元素的 class 中有 active 时退出循环
      if(pageList[i].getAttribute('class')==='page-list active'){
        // 如果当前为第一页并且首位元素为 active 样式时不做处理
        if(pageList[i]==pageList[0] && pageList[i].innerHTML=='1'){
          return;
          // 如果当前 active 为首位元素并且不在第一页时=>换行，并且给末尾元素添加 active 样式
        }else if(pageList[i]==pageList[0] && Number(pageList[i].innerHTML)>1){
          pageList[0].className='page-list hover';
          pageList[pageList.length-1].className='page-list active';
          for(let i=0; i<pageList.length; i++){
            pageList[i].innerHTML= Number(pageList[i].innerHTML)-pageList.length;
          }
        }else{
          // 给上一个相邻的元素添加 active 样式
          pageList[i].className='page-list hover';
          pageList[i-1].className='page-list active';
        }

        return;
      }


      // if(Number(pageList[i].innerHTML) == 1){
      //   return;
      // }else{
      //   pageList[i].innerHTML= Number(pageList[i].innerHTML)-4;
      // }
    }
  }

}
