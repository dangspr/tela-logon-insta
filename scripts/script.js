let totalSlides = document.querySelectorAll(".slider-item").length;
let currentSlide = 0;

let sliderWidth = document.querySelector(".slider").clientWidth;
//console.log(sliderWidth);

document.querySelector(".slider-cell").style.width = sliderWidth * totalSlides;

// document.querySelector(".slider-cell").style.width = 
// `calc(100vw * ${totalSlides}`;

//console.log(document.querySelector(".slider-cell").style.width);


function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    //console.log(sliderItemWidth);
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-cell').style.marginLeft = `-${newMargin}px`;
    console.log(newMargin);

}

setInterval(goNext,4000);
