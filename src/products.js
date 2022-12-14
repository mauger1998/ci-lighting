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
const prolink = document.querySelector("#prolink")

prolink.addEventListener("click", (e) => {
    location.reload()
})


logoImg.src = logo
flagImg.src = flag
heroSec.style.backgroundImage = `url(${newHero})`
pencilImg.src = pencil
productOne.src = firstProduct
productTwo.src = secondProduct
productThree.src = thirdProduct
productFour.src = fourthProduct

let PROJECT_ID = "1x7me4qh"
let DATASET = "production"

let QUERY = encodeURIComponent('*[_type == "product"]')

let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

let newQuery = encodeURIComponent(`*[_type == 'person']{
    name,
    "imageUrl": image.asset->url
  }`)

let newUrl = `https://1x7me4qh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'product'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D`

fetch(PROJECT_URL)
    .then((res) => res.json())
    .then(({ result })=> {
        let grid = document.querySelector(".product-data-grid")
        let firstGridItem = document.querySelector(".grid-item")

        if (result.length > 0) {
            grid.removeChild(firstGridItem)

            result.forEach((product) => {
                let gridItem = document.createElement("div")
                let gridTitle = document.createElement("h3")
                let gridBrand = document.createElement("p")
                let gridDescription = document.createElement("p")
                let gridCode = document.createElement("p")
                let gridButton = document.createElement("button")
                let container = document.createElement("div")

                gridItem.appendChild(container)
                container.classList.add("containerOne")
                


                
                gridTitle.textContent = product.name
                gridBrand.textContent = product.brand
                gridDescription.textContent = product.description 
                gridCode.textContent = product.productCode
                gridButton.textContent = "See More"

                container.appendChild(gridTitle)
                container.appendChild(gridBrand)
                container.appendChild(gridDescription)
                container.appendChild(gridCode)
                grid.appendChild(gridItem)
                container.appendChild(gridButton)
            

                gridItem.classList.add("gridItem")

                // grid.style.gridTemplateColumns = `repeat(${Math.round(result.length / 7)}, 1fr)`
                
                
            })
            
            
        }
    }).then(fetch(newUrl)
    .then((res) => res.json())
    .then(({ result })=> {
        let grid = document.querySelector(".product-data-grid")
        
        let firstGridItem = document.querySelector(".grid-item")

        if (result.length > 0) {
            

            result.forEach((image, index) => {
                let gridItems = Array.from(document.querySelectorAll(".gridItem"))
                let newImg = document.createElement("img")
                newImg.src = image.imageUrl
                newImg.classList.add("makeSmall")
                gridItems[index].appendChild(newImg)
                
                
            })
            
            
        }
    })
    .catch((err) => console.error(err))

 
  
   





)
    

    