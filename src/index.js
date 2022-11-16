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
import service from "./images/customer-icon.png"
import handshake from "./images/handshake.png"
import customerService from "./images/tick-icon.png"
import firstGallery from "./images/Hydra Motorway Photo (2) 1.png"
import cable from "./images/cable-removebg-preview.png"
import firstProduct from "./images/firstproduct.png"
import secondProduct from "./images/secondproduct.png"
import thirdProduct from "./images/thirdproduct.png"
import fourthProduct from "./images/fourthproduct.png"

const gsyFlagImg = document.querySelector(".guernsey-flag")
const searchIconImg = document.querySelector(".search-icon")
const logoImg = document.querySelector(".logo")
const heroSection = document.querySelector(".hero-section")
const circleText = document.querySelector(".circle-texture")
const menu = document.querySelector(".burger")
const serviceIcon = document.querySelector(".customer")
const handshakeIcon = document.querySelector(".hands")
const tickIcon = document.querySelector(".ticks")
const gallery = document.querySelector(".gallery")
const cableBg = document.querySelector(".cable")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const fourth = document.querySelector(".fourth")



gsyFlagImg.src = gsyFlag
logoImg.src = logo
heroSection.style.backgroundImage = `url(${hero})`
circleText.src = circleTexture
menu.src = hamburger
serviceIcon.src = service
handshakeIcon.src = handshake
tickIcon.src = customerService
gallery.src = firstGallery
cableBg.src = cable
first.src = firstProduct
second.src = secondProduct
third.src = thirdProduct
fourth.src = fourthProduct

