import "./style.css"
import gsyFlag from "./images/flag.png"
import searchIcon from "./images/search.png"
import logo from "./images/logo.png"
import hero from "./images/herowithlight.png"


const gsyFlagImg = document.querySelector(".guernsey-flag")
const searchIconImg = document.querySelector(".search-icon")
const logoImg = document.querySelector(".logo")
const heroSection = document.querySelector(".hero-section")


gsyFlagImg.src = gsyFlag
logoImg.src = logo
heroSection.style.backgroundImage = `url(${hero})`
