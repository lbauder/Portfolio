/* -----------------------------
   COORDINATE HELPER
----------------------------- */

const scene = document.getElementById("scene")
const coords = document.getElementById("coords")

scene.addEventListener("mousemove", (e)=>{

const rect = scene.getBoundingClientRect()

const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2)
const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(2)

coords.textContent = `X: ${x}%  Y: ${y}%`

})



/* -----------------------------
   HOTSPOT CLICK SYSTEM
----------------------------- */

const hotspots = document.querySelectorAll(".hotspot")

hotspots.forEach(h => {

h.addEventListener("click", () => {

const type = h.classList[1]

/* hide all categories */

document.querySelectorAll(".category")
.forEach(c => c.style.display = "none")

/* show matching category */

const section = document.querySelector("." + type + "-items")

if(section){
section.style.display = "block"
}

})

})



/* -----------------------------
   SCROLL BACKGROUND COLOR
----------------------------- */

let colorIndex = 0

const colors = [
"#000000",
"#0000ff",
"#006666",
"#669900",
"#ffcc00",
"#ff9900",
"#800000",
"#ff3399",
"#9900cc"
]

window.addEventListener("wheel",(e)=>{

if(e.deltaY > 0){
colorIndex++
}else{
colorIndex--
}

if(colorIndex < 0) colorIndex = colors.length-1
if(colorIndex >= colors.length) colorIndex = 0

document.body.style.setProperty("--bg-color", colors[colorIndex])

})

/* -----------------------------
   OVERLAY IMAGE
----------------------------- */

const overlayImage = document.getElementById("overlay-image")

const overlayMap = {
coffee: "images/hover/coffee_hover.png",
polaroid: "images/hover/polaroid_hover.png",
controller: "images/hover/controller_hover.png",
rat: "images/hover/rat_hover.png",
walkman: "images/hover/walkman_hover.png",
film: "images/hover/film_hover.png"
}

hotspots.forEach(h => {

const type = h.classList[1]

h.addEventListener("mouseenter", () => {

overlayImage.src = overlayMap[type]
overlayImage.style.opacity = 1

})

h.addEventListener("mouseleave", () => {

overlayImage.style.opacity = 0

})

})
/* -----------------------------
   COFFEE
----------------------------- */

const track = document.querySelector(".coffee-track")
const projects = document.querySelectorAll(".coffee-project")

const leftBtn = document.querySelector(".coffee-arrow.left")
const rightBtn = document.querySelector(".coffee-arrow.right")

let index = 0

function updateCarousel(){

track.style.transform = `translateX(-${index * 100}%)`

}

rightBtn.addEventListener("click", ()=>{

index++

if(index >= projects.length){
index = 0
}

updateCarousel()

})

leftBtn.addEventListener("click", ()=>{

index--

if(index < 0){
index = projects.length - 1
}

updateCarousel()

})