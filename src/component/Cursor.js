import gsap from 'gsap'
import React, { useEffect } from 'react'

const Cursor = () => {

    useEffect(() => {
        document.addEventListener("mousemove", e => {
            gsap.to(".text", {
                x: e.clientX,
                y: e.clientY,
                stagger: -0.02
            })
        })
    }, [])

    return (
        <>
            <div className="cursor">
                <div class="text">codegrid</div>
                <div class="text">codegrid</div>
                <div class="text">codegrid</div>
                <div class="text">codegrid</div>
                <div class="text"><span>codegrid</span></div>
            </div>
        </>
    )
}

export default Cursor