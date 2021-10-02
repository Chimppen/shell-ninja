import gsap from "gsap"

export default ()=>{
    gsap.from('.from-bottom', {
        opacity:0,
        y: 10,
        duration:.3
    })
}