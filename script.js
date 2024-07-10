let listBg = document.querySelectorAll('.banner .bg');
let titleBanner = document.querySelectorAll('.banner .h1');
let listTab = document.querySelectorAll('.tab');

window.addEventListener('scroll', (event) => {
    // scrollY is the web scrollbar position (pixel)
    let top = event.currentTarget.scrollY;

    /*
        index is the order of class bg (0,1,2,...5)
        when scrolling the web, the class bg scrolls down,
        the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
            bg.style.transform = `translateY(${top*index / 2}px)`;
        }else if(index==0){
            bg.style.transform= 'translateY(${top/3}px)';
        }
    });
    titleBanner.style.transform = `translateY(${top*index / 2}px)`;
    /*
    parallax scroll in tab
    when tab position is less than 500px
    from scrollbar position add active class to animation
    and vice versa
    */
   listTab.forEach(tab => {
    if(tab.offset -Top<550 ){
        tab.classList.add('active');
    }else{
        tab.classList.remove('active');   

    }

})
});
