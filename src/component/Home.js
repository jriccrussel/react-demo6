import anime, { timeline } from 'animejs'
import gsap from 'gsap'
import { TweenMax } from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const title = useRef(null)

    useEffect(() => {
        // TEXT TITLE
        // var textWrapper = document.querySelector(".ml12")
        var textWrapper = title.current
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        )

        anime.timeline().add({
            targets: ".ml12 .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 2000 + 60 * i,
        })

        const tl = gsap.timeline()

        gsap.from(".left", 3, {
            left: "-50%",
            ease: "expo.easeInOut",
            delay: 3.4,
        })

        gsap.from(".header h1", 3, {
            left: "-140%",
            ease: "expo.easeInOut",
            delay: 3.4,
        })
        
        // tl.staggerFrom(".images > div", 1, {
        //     y: "60",
        //     opacity: 0,
        //     ease: "power2.easeOut",
        //     delay: 6,
        // }, 0.2)

        // tl.staggerFrom(".header > p", 1, {
        //     y: "60",
        //     opacity: 0,
        //     ease: "power2.easeOut",
        //     delay: 0.5,
        // }, 0.2)

        // gsap.from(".link", 1, {
        //     opacity: 0,
        //     ease: "SteppedEase.config(1)",
        //     repeat: -1,
        //     repeatDelay: 0.2,
        //     delay: 7.8,
        // })

        TweenMax.staggerFrom(".images > div", 1, {
            y: "60",
            opacity: 0,
            ease: "power2.easeOut",
            delay: 6,
        }, 0.2)

        TweenMax.staggerFrom(".header > p", 1, {
            y: "60",
            opacity: 0,
            ease: "power2.easeOut",
            delay: 5.6,
        }, 0.2)
        
        TweenMax.from(".link", 1, {
            opacity: 0,
            ease: "SteppedEase.config(1)",
            repeat: -1,
            repeatDelay: 0.2,
            delay: 7.8,
        })

    }, [])

    return (
        <>
            <div className="container">
                <div className="left column">
                    <div className="header">
                        <p>boundary supply /</p>
                        <p>
                            better than brand new second hand clothing / focus by sick apparel
                            everyday,
                        </p>
                        <p>home of (23-29)</p>
                    </div>
                    <div className="link">
                        <Link to="/">
                            all products
                        </Link>
                    </div>
                </div>
                <div className="right column">
                    <div className="images">
                        <div className="img-1 img"></div>
                        <div className="img-2 img"></div>
                        <div className="img-3 img"></div>
                        <div className="img-4 img"></div>
                    </div>
                    <div className="header">
                        <h1 className="ml12" ref={title}>gorgeoushe</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home