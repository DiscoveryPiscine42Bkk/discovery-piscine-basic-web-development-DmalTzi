const nav = document.getElementById("nav-bar")
const link = document.getElementById("nav-link")
const body = document.getElementsByTagName("body")[0]


nav.addEventListener("click", () => {
    if (body.offsetWidth <= 1200) {
        if (link.style.display == "flex") {
            link.style.display = "none"
        }else {
            link.style.display = "flex"
        }
    
    }
})

window.addEventListener("resize", () => {
    if (document.body.offsetWidth > 1200) {
        link.style.display = "flex"
    }
    if (body.offsetWidth <= 1200) {
            link.style.display = "none"
    }

})