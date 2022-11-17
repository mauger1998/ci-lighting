import "./style.css"
import logo from "./images/logo.png"
import flag from "./images/flag.png"
import newHero from "./images/producthero.png"

const logoImg = document.querySelector(".logo")
const flagImg = document.querySelector(".guernsey-flag")
const heroSec = document.querySelector(".hero-section-products")

logoImg.src = logo
flagImg.src = flag
heroSec.style.backgroundImage = `url(${newHero})`