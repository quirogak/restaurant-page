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

    document.querySelector(".main-content").textContent = ""
    button1.setAttribute('style', 'border: 4px solid rgb(241, 209, 28);')
    button2.setAttribute('style', 'border: 2px solid black;')
    button3.setAttribute('style', 'border: 2px solid black;')

   }

   
   if (e.target.id == "button2" ){

    document.querySelector(".main-content").textContent = ""
    button2.setAttribute('style', 'border: 4px solid rgb(241, 209, 28);')
    button1.setAttribute('style', 'border: 2px solid black;')
    button3.setAttribute('style', 'border: 2px solid black;')
   }
   
   if (e.target.id == "button3" ){
    
    document.querySelector(".main-content").textContent = ""
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
    leafIcon.src ="../img/leaf-icon.png"
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

    //opening hours


    const hoursContainer = document.createElement("div")
    hoursContainer.setAttribute("class","generic-container")
    hoursContainer.setAttribute("id","hours-text")
    document.querySelector(".main-content").appendChild(hoursContainer)

    const hoursTitle = document.createElement("h2")
    hoursTitle.setAttribute("class","sub-title")
    hoursContainer.appendChild(hoursTitle)
    hoursTitle.textContent = "Hours"

    const hoursText = document.createElement("p")
    hoursText.setAttribute("class","p-phrase")
    hoursText.setAttribute("id","opening-hours")
    hoursContainer.appendChild(hoursText)
    hoursText.textContent = "Monday: 8am - 6pm Tuesday: 8am - 6pm Wednesday: 8am - 6pm Thursday: 8am - 5pm Friday: 7am - 9pm Saturday: 6am - 10pm Sunday: 8am - 10pm "
    
    const halfLemonIcon = document.createElement("img")
    halfLemonIcon.src ="../img/half-lemon.png"
    halfLemonIcon.setAttribute("class","half-lemon-icon")
    hoursContainer.appendChild(halfLemonIcon)

    const locationContainer = document.createElement("div")
    locationContainer.setAttribute("class","generic-container")
    locationContainer.setAttribute("id","location-container")
    document.querySelector(".main-content").appendChild(locationContainer)

    const locationTitle = document.createElement("h2")
    locationTitle.setAttribute("class","sub-title")
    locationContainer.appendChild(locationTitle)
    locationTitle.textContent = "Location"

    const locationText = document.createElement("p")
    locationText.setAttribute("class","p-phrase")
    locationText.setAttribute("id","location-text")
    locationContainer.appendChild(locationText)
    locationText.textContent = "3322 Km 18, Cali, Colombia"

    const leafIcon2 = document.createElement("img")
    leafIcon2.src ="../img/leaf-icon.png"
    leafIcon2.setAttribute("class","leaf-icon")
    leafIcon2.setAttribute("id","leaf-icon2")
    locationContainer.appendChild(leafIcon2)


  


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

