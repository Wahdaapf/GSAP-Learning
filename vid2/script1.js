gsap.to("#page2 h1", {
    transform: "translate(-160%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -160%",
        scrub: 2,
        pin: true
    }
})