
document.addEventListener("DOMContentLoaded", (event) => {


    gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin);


    // Home page
    gsap.to("h2", {
        x : "0%",
        ease: Expo.easeInOut,
        delay : 1,
    },0.5)
    gsap.to("p", {
        x : "0%",
        ease: Expo.easeInOut,
        delay : 1,
    },0.5)

    TweenMax.staggerFrom(".home-img", 2 , {
        y : "110%",
        ease: Expo.easeInOut,
        delay: 1,
    },0.4)

    gsap.to(".visit-my-works", {
        x : "0%",
        ease: Expo.easeInOut,
        delay : 1,
    },0.4)

    
});

