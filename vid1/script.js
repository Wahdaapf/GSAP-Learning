//**** */
// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// gsap.to("#box2", {
//     x: 500,
//     y: 500,
//     duration: 2,
//     delay: 1
// })

//**** */
// gsap.from("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

//**** */
// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "purple",
//     borderRadius: "50%",
//     scale:0.5,
//     repeat: -1,
//     yoyo: true
// })

// gsap.from("h1", {
//     duration: 1,
//     y: 20,
//     delay: 1,
//     opacity: 0,
//     stagger: 0.3
// })

// var tl = gsap.timeline()

// tl.to("#box", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })

var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.from("h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    scale: 0.2
})

