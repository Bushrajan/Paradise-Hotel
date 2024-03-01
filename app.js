let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;

const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
}

const getSlideIndex = ($slide) => {
    return [...$q(".carousel__item")].indexOf($slide);
}

const prevSlide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $last = $slides[$slides.length - 1];
    $last.remove();
    $list.prepend($last);
    activateSlide($q(".carousel__item")[index]);
}
const nextSlide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $first = $slides[0];
    $first.remove();
    $list.append($first);
    activateSlide($q(".carousel__item")[index]);
}

const chooseSlide = (e) => {
    const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 5 : 8;
    const $slide = e.target.closest(".carousel__item");
    const index = getSlideIndex($slide);
    if (index < 3 || index > max) return;
    if (index === max) nextSlide();
    if (index === 3) prevSlide();
    activateSlide($slide);
}

const activateSlide = ($slide) => {
    if (!$slide) return;
    const $slides = $q(".carousel__item");
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute('data-active', true);
    $slide.focus();
}

const autoSlide = () => {
    nextSlide();
}

const pauseAuto = () => {
    clearInterval(auto);
    clearTimeout(pauser);
}

const handleNextClick = (e) => {
    pauseAuto();
    nextSlide(e);
}

const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide(e);
}

const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
}

const handleSlideKey = (e) => {
    switch (e.keyCode) {
        case 37:
        case 65:
            handlePrevClick();
            break;
        case 39:
        case 68:
            handleNextClick();
            break;
    }
}

const startAuto = () => {
    auto = setInterval(autoSlide, 3000);
}

startAuto();

$next.addEventListener("click", handleNextClick);
$prev.addEventListener("click", handlePrevClick);
$list.addEventListener("click", handleSlideClick);
$list.addEventListener("focusin", handleSlideClick);
$list.addEventListener("keyup", handleSlideKey);

// checkin- out function
function run() {

    let b = Date(document.getElementById("2").value)
    let c = Number(document.getElementById("4").value)

let Check_In_and_Check_Out = document.getElementById("ch-in").innerHTML = b;
let Person = document.getElementById("num").innerHTML = c;

}
//current time:-
function time(){
        let time = new Date()
        let onlytime = time.toLocaleTimeString()
        document.getElementById("time").innerHTML = onlytime
        }
        setInterval(time,1000) 

// signup //
function run1() {

    let email = Text(document.getElementById("floatingInput").value)
    let pascode = Text(document.getElementById("floatingPassward").value)

    console.log(email);
    console.log(pascode);
}