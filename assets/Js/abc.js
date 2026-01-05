

//sec_2_slider

let slides = document.querySelectorAll(".sec_2_slide");
let dots = document.querySelectorAll(".sec_2_dot_1");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}


// sec_3_slider


let index = 0;
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".sec_3_cart");

const itemWidth = items[0].offsetWidth + 50; // item + margin

function slideLeft() {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
}

function slideRight() {
    if (index < items.length - 1) {
        index++;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
}


//sec_10_slider

const slider = document.getElementById("sec_10_slider");
const dots1 = document.querySelectorAll(".sec_10_dot");

function moveSlide(index) {
    slider.style.transform = `translateX(-${index * 310}px)`;

    dots1.forEach(sec_10_dot => sec_10_dot.classList.remove("sec_10_active"));
    dots1[index].classList.add("sec_10_active");
}

