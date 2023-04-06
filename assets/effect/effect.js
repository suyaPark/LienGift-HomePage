var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 393,
    slideMargin = 30,
    nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    function moveSlide(num){
        slides.style.left = -num * 393 + 'px';
        currentIdx = num;
    }
    nextBtn.addEventListener('click', function (){
        if(currentIdx < slideCount -1){
        moveSlide(currentIdx +1);
        }else{
            moveSlide(0);
        }
    });
    prevBtn.addEventListener('click', function (){
        if(currentIdx > 0){
        moveSlide(currentIdx -1);
        }else{
            moveSlide(slideCount - 3);
        }
    });
