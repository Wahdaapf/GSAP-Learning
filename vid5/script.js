var close = document.querySelector("#menuClose");
var menu = document.querySelector("#menuClick");

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.5,
});

tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0,
});

tl.from("#full #menuClose", {
    opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
    tl.play();
});

close.addEventListener("click", function () {
    tl.reverse();
});
