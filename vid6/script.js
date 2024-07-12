function breakText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");

    var halfvalue = (splittedText.length / 2)

    clutter = ''

    splittedText.forEach(function (e, id) {
        if(id < halfvalue) {
            clutter += `<span class='a'>${e}</span>`
        } else {
            clutter += `<span class='b'>${e}</span>`
        }
    });

    h1.innerHTML = clutter
}

breakText()

gsap.from(".a", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

gsap.from(".b", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})
