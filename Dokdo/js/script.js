document.addEventListener("scroll",(e)=>{
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const windowTop = window.scrollY;
    console.log(windowTop);
    

    if(windowTop >= headerHeight){
        header.classList.add('on');
    }
    else{
        header.classList.remove('on');
    }
});
