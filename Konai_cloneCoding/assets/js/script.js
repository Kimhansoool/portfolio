//스크롤 이벤트가 발생되어야 할 주체
const subTit2 = document.querySelector('#subTit2');


const innerOffsetTop = document.querySelector('.main-content-inner2').offsetTop;
console.log(innerOffsetTop);

window.addEventListener('scroll', (e) =>{
    const nowScroll = window.scrollY
    console.log(nowScroll);

    if( nowScroll >= innerOffsetTop){
        subTit2.style.top = "0";
        subTit2.style.removeProperty('bottom');
    } else{
        subTit2.style.bottom = "0";
        subTit2.style.removeProperty('top');
    }
});
