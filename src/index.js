import "./style.css"
import gsyFlag from "./images/flag.png"
import searchIcon from "./images/search.png"
import logo from "./images/logo.png"
import hero from "./images/newheroone.png"
import circleTexture from "./images/circle-vector.png"
import firstIcon from "./images/icon1.png"
import secondIcon from "./images/icon2.png"
import thirdIcon from "./images/icon3.png"
import hamburger from "./images/Group 26.png"

const gsyFlagImg = document.querySelector(".guernsey-flag")
const searchIconImg = document.querySelector(".search-icon")
const logoImg = document.querySelector(".logo")
const heroSection = document.querySelector(".hero-section")
const circleText = document.querySelector(".circle-texture")
const menu = document.querySelector(".burger")



gsyFlagImg.src = gsyFlag
logoImg.src = logo
heroSection.style.backgroundImage = `url(${hero})`
circleText.src = circleTexture
menu.src = hamburger
