let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial display
showSlide(currentSlide);

 function OrderBtn(){ 
    alert("Your Order is Sucessfully send");
};

let btn = document.querySelectorAll("#btn");
btn.forEach(function(element) {
    console.log(element);
});
let ele = document.querySelectorAll(".ele");
ele.forEach(function(element) {
    console.log(element);
});
let elem = document.querySelectorAll(".elem");
elem.forEach(function(element) {
    console.log(element.textContent);
});
let eleme = document.querySelectorAll(".eleme");
eleme.forEach(function(element) {
    console.log(element.textContent);
});

