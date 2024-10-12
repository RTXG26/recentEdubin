const imgContainer = document.querySelector(".image__container")
const dotsContainer = document.querySelector(".nav__dots")
const resizeTell = document.querySelector("h4")

const headerDiv = document.getElementById("headerDiv")
const carouselDiv1 = document.getElementById("carouselContDiv1")
const carouselDiv2 = document.getElementById("carouselContDiv2")
const skillDiv = document.getElementById("skillDiv")
const youtubeDiv = document.getElementById("youtube-div")
const upcomingDiv = document.getElementById("upcoming-eventsDiv")
const skillDiv2 = document.getElementById("skillDiv2")


document.getElementById("dot1").addEventListener("click", () => {
  imgContainer.className = "image__container first-active"
  dotsContainer.className = "nav__dots first-current"
})
document.getElementById("dot2").addEventListener("click", () => {
  imgContainer.className = "image__container second-active"
  dotsContainer.className = "nav__dots second-current"
})
document.getElementById("dot3").addEventListener("click", () => {
  imgContainer.className = "image__container third-active"
  dotsContainer.className = "nav__dots third-current"
})

function showBrowserWidth(){
  const width= window.innerWidth;
  resizeTell.innerText = `Width: ${width}px`;

}


function callme() {
  if (window.matchMedia("(min-width:768px)").matches) {
    headerDiv.classList.add("container")
    carouselDiv1.classList.add("container")
    carouselDiv2.classList.add("container")
    skillDiv.classList.add("container")
    youtubeDiv.classList.add("container")
    upcomingDiv.classList.add("container")
    skillDiv2.classList.add("container")
    //carouselDiv
    //carouselDiv2
  } else {


    headerDiv.classList.remove("container")
    carouselDiv1.classList.remove("container")
    carouselDiv2.classList.remove("container")
    skillDiv.classList.remove("container")
    youtubeDiv.classList.remove("container")
    upcomingDiv.classList.remove("container")
    skillDiv2.classList.remove("container")
    //carouselDiv2.classList.add("container-fluid")
  }
}

window.onresize = function () {
  showBrowserWidth()
  callme()
}