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
    restaurantTitle.setAttribute("class","title")
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

  const genMenu = () => {

    const titleContainer = document.createElement("div")
    titleContainer.setAttribute("class","generic-container")
    titleContainer.setAttribute("id","menu-title-container")
    document.querySelector(".main-content").appendChild(titleContainer)
    
    const leafIcon = document.createElement("img")
    leafIcon.src ="../img/leaf-icon.png"
    leafIcon.setAttribute("class","leaf-icon")
    titleContainer.appendChild(leafIcon)

    const menuTitle = document.createElement("h2")
    menuTitle.setAttribute("class","title")
    titleContainer.appendChild(menuTitle)
    menuTitle.textContent = "Menu"



  }

  const genContact = () => {

    const titleContainer = document.createElement("div")
    titleContainer.setAttribute("class","generic-container")
    titleContainer.setAttribute("id","contact-title-container")
    document.querySelector(".main-content").appendChild(titleContainer)
    
    const leafIcon = document.createElement("img")
    leafIcon.src ="../img/leaf-icon.png"
    leafIcon.setAttribute("class","leaf-icon")
    leafIcon.setAttribute("id","leaf-icon3")
    titleContainer.appendChild(leafIcon)

    const contactTitle = document.createElement("h2")
    contactTitle.setAttribute("class","title")
    contactTitle.setAttribute("id","contact-title")
    titleContainer.appendChild(contactTitle)
    contactTitle.textContent = "Contact us"

    /*----------------------------------------------------*/ 

    const contactOne = document.createElement("div")
    contactOne.setAttribute("class","generic-container")
    contactOne.setAttribute("id","contact-1")
    document.querySelector(".main-content").appendChild(contactOne)

    const infoContainer = document.createElement("div")
    infoContainer.setAttribute("class","info-container")
    contactOne.appendChild(infoContainer)

    const contactSubTitle = document.createElement("h3")
    contactSubTitle.setAttribute("class","name")
    infoContainer.appendChild(contactSubTitle)
    contactSubTitle.textContent = "Clank"

    const contactDetails = document.createElement("p")
    contactDetails.setAttribute("class","details")
    infoContainer.appendChild(contactDetails)
    contactDetails.textContent = "CEO"

    const contactNumber = document.createElement("p")
    contactNumber.setAttribute("class","details")
    infoContainer.appendChild(contactNumber)
    contactNumber.textContent = " +57 324112333 "

    const contactEmail = document.createElement("p")
    contactEmail.setAttribute("class","details")
    infoContainer.appendChild(contactEmail)
    contactEmail.textContent = "EmailRandomExample@gmail.com"

    const contactPhoto = document.createElement("img")
    contactPhoto.src = "../img/clank.png"
    contactPhoto.setAttribute("class","profile-pic")
    contactOne.appendChild(contactPhoto)



  
    /*----------------------------------------------------*/ 



    /*----------------------------------------------------*/ 

    const contactTwo = document.createElement("div")
    contactTwo.setAttribute("class","generic-container")
    contactTwo.setAttribute("id","contact-2")
    document.querySelector(".main-content").appendChild(contactTwo)

    const infoContainer2 = document.createElement("div")
    infoContainer2.setAttribute("class","info-container")
    contactTwo.appendChild(infoContainer2)

    const contactSubTitle2 = document.createElement("h3")
    contactSubTitle2.setAttribute("class","name")
    infoContainer2.appendChild(contactSubTitle2)
    contactSubTitle2.textContent = "Sackboy"

    const contactDetails2 = document.createElement("p")
    contactDetails2.setAttribute("class","details")
    infoContainer2.appendChild(contactDetails2)
    contactDetails2.textContent = "Chef"

    const contactNumber2 = document.createElement("p")
    contactNumber2.setAttribute("class","details")
    infoContainer2.appendChild(contactNumber2)
    contactNumber2.textContent = " +57 325123222"

    const contactEmail2 = document.createElement("p")
    contactEmail2.setAttribute("class","details")
    infoContainer2.appendChild(contactEmail2)
    contactEmail2.textContent = "EmailRandomExample@gmail.com"

    const contactPhoto2 = document.createElement("img")
    contactPhoto2.src = "../img/sackboy.png"
    contactPhoto2.setAttribute("class","profile-pic")
    contactTwo.appendChild(contactPhoto2)


  
  
    /*----------------------------------------------------*/ 



    /*----------------------------------------------------*/ 

    const contactThree = document.createElement("div")
    contactThree.setAttribute("class","generic-container")
    contactThree.setAttribute("id","contact-3")
    document.querySelector(".main-content").appendChild(contactThree)

    const infoContainer3 = document.createElement("div")
    infoContainer3.setAttribute("class","info-container")
    contactThree.appendChild(infoContainer3)

    const contactSubTitle3 = document.createElement("h3")
    contactSubTitle3.setAttribute("class","name")
    infoContainer3.appendChild(contactSubTitle3)
    contactSubTitle3.textContent = "Birdy"

    const contactDetails3 = document.createElement("p")
    contactDetails3.setAttribute("class","details")
    infoContainer3.appendChild(contactDetails3)
    contactDetails3.textContent = "Receptionist"

    const contactNumber3 = document.createElement("p")
    contactNumber3.setAttribute("class","details")
    infoContainer3.appendChild(contactNumber3)
    contactNumber3.textContent = " +34 124112737 "

    const contactEmail3 = document.createElement("p")
    contactEmail3.setAttribute("class","details")
    infoContainer3.appendChild(contactEmail3)
    contactEmail3.textContent = "EmailRandomExample@gmail.com"

    const contactPhoto3 = document.createElement("img")
    contactPhoto3.src = "../img/birdy.png"
    contactPhoto3.setAttribute("class","profile-pic")
    contactThree.appendChild(contactPhoto3)
  
    /*----------------------------------------------------*/ 

  }

 
//eventListeners

  window.onload = () => {
    button1.click();
  }

  button1.addEventListener("click", buttonSwitch)
  button1.addEventListener("click", genHome)

  button2.addEventListener("click", buttonSwitch)
  button2.addEventListener("click", genMenu)

  button3.addEventListener("click", buttonSwitch)
  button3.addEventListener("click", genContact)

  

})();

