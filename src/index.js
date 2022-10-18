const staticElements = (() => {

  const genStaticElements = () => {

    const mainContainer = document.getElementById("content")

  //basic structure
  const header = document.createElement("header")
  const main = document.createElement("main")
  const footer = document.createElement("footer")
  mainContainer.appendChild(header)
  mainContainer.appendChild(main)
  mainContainer.appendChild(footer)


  const navBar = document.createElement("div")
  navBar.setAttribute("class", "nav-bar")
  header.appendChild(navBar)

  //nav-bar content

    for(let i = 1 ; i <= 3; i++){
        const navButtons = document.createElement("button")
        navButtons.setAttribute("class","nav-button")
        navButtons.setAttribute("id","button" + i)
        navBar.appendChild(navButtons)
      }

   document.querySelector("#button1").textContent = "Home"
   document.querySelector("#button2").textContent = "Menu"
   document.querySelector("#button3").textContent = "Contact"

   //main content

   const mainContent = document.createElement("div")
   mainContent.setAttribute("class","main-content")
   main.appendChild(mainContent)

   //footer
   const footerText1 = document.createElement("a")
   footerText1.setAttribute("class","footer-text")
   footer.appendChild(footerText1)
   footerText1.textContent = "@quirogak"
   footerText1.href = "https://github.com/quirogak"

   const footerText2 = document.createElement("p")
   footerText2.setAttribute("class","footer-text")
   footer.appendChild(footerText2)
   footerText2.textContent = "Background photo by DashaDee from PixaBay"


  }

  return {genStaticElements}
  

})();

staticElements.genStaticElements()



const genElements = (() => {

 const button1 =  document.querySelector("#button1")
 const button2 =  document.querySelector("#button2")
 const button3 =  document.querySelector("#button3")


  const buttonSwitch = (e) => {


   if (e.target.id == "button1" ){

    button1.setAttribute('style', 'border: 4px solid rgb(241, 209, 28);')
    button2.setAttribute('style', 'border: 2px solid black;')
    button3.setAttribute('style', 'border: 2px solid black;')
   }

   
   if (e.target.id == "button2" ){
    button2.setAttribute('style', 'border: 4px solid rgb(241, 209, 28);')
    button1.setAttribute('style', 'border: 2px solid black;')
    button3.setAttribute('style', 'border: 2px solid black;')
   }
   
   if (e.target.id == "button3" ){
    button3.setAttribute('style', 'border: 4px solid rgb(241, 209, 28);')
    button2.setAttribute('style', 'border: 2px solid black;')
    button1.setAttribute('style', 'border: 2px solid black;')
   }
   

    
  }


  const genHome = () => {

    //title

    const titleContainer = document.createElement("div")
    titleContainer.setAttribute("class","generic-container")
    titleContainer.setAttribute("id","home-title")
    document.querySelector(".main-content").appendChild(titleContainer)
    
    const leafIcon = document.createElement("img")
    leafIcon.src ="../img/Leaf_icon_03.svg.png"
    leafIcon.setAttribute("class","leaf-icon")
    titleContainer.appendChild(leafIcon)

    const restaurantTitle = document.createElement("h2")
    restaurantTitle.setAttribute("class","res-title")
    titleContainer.appendChild(restaurantTitle)
    restaurantTitle.textContent = "Planeta Limón"

    //description

    const descriptionContainer = document.createElement("div")
    descriptionContainer.setAttribute("class","generic-container")
    descriptionContainer.setAttribute("id","desc-text")
    document.querySelector(".main-content").appendChild(descriptionContainer)


    const descriptionText = document.createElement("p")
    descriptionText.setAttribute("class","p-text")
    descriptionContainer.appendChild(descriptionText)
    descriptionText.textContent = "Welcome to Planeta Limón, the worlds most famous lemon-based restaurant, where every meal are made of natural and delicious lemons. Come and enjoy this acid but delicious flavoured adventure!"

    const descriptionPhrase = document.createElement("p")
    descriptionPhrase.setAttribute("class","p-phrase")
    descriptionContainer.appendChild(descriptionPhrase)
    descriptionPhrase.textContent = "When life gives you lemons, visit Planeta Limón and get a discount!"

    const lemonIcon = document.createElement("img")
    lemonIcon.src ="../img/lemon-icon.png"
    lemonIcon.setAttribute("class","lemon-icon")
    descriptionContainer.appendChild(lemonIcon)
  

  


  }

 
//eventListeners

  window.onload = () => {
    button1.click();
  }
  button1.addEventListener("click", buttonSwitch)
  button1.addEventListener("click", genHome)

  button2.addEventListener("click", buttonSwitch)

  button3.addEventListener("click", buttonSwitch)

})();

