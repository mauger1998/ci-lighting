import "./style.css"
import logo from "./images/logo.png"
import flag from "./images/flag.png"
import newHero from "./images/producthero.png"
import pencil from "./tinified/adjustable-downlights-haneco-lighting 1.png"
import firstProduct from "./tinified/rainbow.png"
import secondProduct from "./tinified/hager.png"
import thirdProduct from "./tinified/aurora.png"
import fourthProduct from "./tinified/hydra.png"

const logoImg = document.querySelector(".logo")
const flagImg = document.querySelector(".guernsey-flag")
const heroSec = document.querySelector(".hero-section-products")
const pencilImg = document.querySelector(".pencil")
const productOne = document.querySelector(".product-first")
const productTwo = document.querySelector(".product-second")
const productThree = document.querySelector(".product-third")
const productFour = document.querySelector(".product-fourth")


logoImg.src = logo
flagImg.src = flag
heroSec.style.backgroundImage = `url(${newHero})`
pencilImg.src = pencil
productOne.src = firstProduct
productTwo.src = secondProduct
productThree.src = thirdProduct
productFour.src = fourthProduct