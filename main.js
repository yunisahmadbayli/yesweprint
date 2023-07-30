const menuItem = document.querySelector("#menuItem")
const navLinks = document.querySelector(".nav-links")

menuItem.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-active")
    menuItem.classList.toggle("close")
})