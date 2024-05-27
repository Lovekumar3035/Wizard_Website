function page1Animation() {
    let tl = gsap.timeline();
    tl.from("nav h1,nav h4,nav button", {
        y: -30,
        duration: 0.7,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -600,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part2 img", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "-=0.5")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 0.5
    })

}
page1Animation();


function page2Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            markers: false,
            start: "top 50%",
            end: "top -80%",
            scrub: 2
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })

    tl2.from(".left1", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "line1")
    tl2.from(".right1", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "line1")


    tl2.from(".left2", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "line2")
    tl2.from(".right2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "line2")

    tl2.from(".section3", {
        y: 300,
        opacity: 0,
        duration: 1
    })
}

page2Animation();