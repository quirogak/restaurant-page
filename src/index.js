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
    leafIcon.src ="img/leaf-icon.png"
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
    lemonIcon.src ="img/lemon-icon.png"
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
    halfLemonIcon.src ="img/half-lemon.png"
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
    leafIcon2.src ="img/leaf-icon.png"
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
    leafIcon.src ="img/leaf-icon.png"
    leafIcon.setAttribute("class","leaf-icon")
    titleContainer.appendChild(leafIcon)

    const menuTitle = document.createElement("h2")
    menuTitle.setAttribute("class","title")
    titleContainer.appendChild(menuTitle)
    menuTitle.textContent = "Menu"



   const genFoodElements = () => {


  //food elements and title containers

    const foodSection = document.createElement("div")
    foodSection.setAttribute("class","food-section")
    document.querySelector(".main-content").appendChild(foodSection)

    const foodSection2 = document.createElement("div")
    foodSection2.setAttribute("class","food-section")
    document.querySelector(".main-content").appendChild(foodSection2)

    const foodSection3 = document.createElement("div")
    foodSection3.setAttribute("class","food-section")
    document.querySelector(".main-content").appendChild(foodSection3)

    //section title 1

 const dessertsTitle = document.createElement("h2")
 dessertsTitle.setAttribute("class","generic-container")
 dessertsTitle.setAttribute("id","appetizers-title")
 foodSection.appendChild(dessertsTitle)
 dessertsTitle.textContent = "Desserts"

 const lemonIcon2 = document.createElement("img")
 lemonIcon2.src ="img/lemon-icon.png"
 lemonIcon2.setAttribute("class","lemon-icon")
 lemonIcon2.setAttribute("id","lemon-icon2")
 dessertsTitle.appendChild(lemonIcon2)

 const lemonIcon3 = document.createElement("img")
 lemonIcon3.src ="img/lemon-icon.png"
 lemonIcon3.setAttribute("class","lemon-icon")
 lemonIcon3.setAttribute("id","lemon-icon3")
 dessertsTitle.appendChild(lemonIcon3)

 //section title 2

 const mainCourseTitle = document.createElement("h2")
 mainCourseTitle.setAttribute("class","generic-container")
 mainCourseTitle.setAttribute("id","main-course-title")
 foodSection2.appendChild(mainCourseTitle)
 mainCourseTitle.textContent = "Main"

 const lemonIcon4 = document.createElement("img")
 lemonIcon4.src ="img/lemon-icon.png"
 lemonIcon4.setAttribute("class","lemon-icon")
 lemonIcon4.setAttribute("id","lemon-icon4")
 mainCourseTitle.appendChild(lemonIcon4)

 const lemonIcon5 = document.createElement("img")
 lemonIcon5.src ="img/lemon-icon.png"
 lemonIcon5.setAttribute("class","lemon-icon")
 lemonIcon5.setAttribute("id","lemon-icon5")
 mainCourseTitle.appendChild(lemonIcon5)

 //section title 3

 const beveragesTitle = document.createElement("h2")
 beveragesTitle .setAttribute("class","generic-container")
 beveragesTitle .setAttribute("id","beverages-title")
 foodSection3.appendChild(beveragesTitle )
 beveragesTitle.textContent = "Beverages"

 const lemonIcon6 = document.createElement("img")
 lemonIcon6.src ="img/lemon-icon.png"
 lemonIcon6.setAttribute("class","lemon-icon")
 lemonIcon6.setAttribute("id","lemon-icon6")
 beveragesTitle.appendChild(lemonIcon6)

 const lemonIcon7 = document.createElement("img")
 lemonIcon7.src ="img/lemon-icon.png"
 lemonIcon7.setAttribute("class","lemon-icon")
 lemonIcon7.setAttribute("id","lemon-icon7")
 beveragesTitle.appendChild(lemonIcon7)


 let foodContainer = []
  let foodTitle = []
  let foodDescription = []
  let foodPrice = []
  let FoodPhoto = []


 for(let i = 1 ; i <= 11 ; i++){

  //food elements

  foodContainer[i] = document.createElement("div")
  foodContainer[i].classList.add("food-container","generic-container")
  foodContainer[i].setAttribute("id","food-"+i)

  foodTitle[i] = document.createElement("h3")
  foodTitle[i].setAttribute("class","name")
  foodContainer[i].appendChild(foodTitle[i])

  foodDescription[i] = document.createElement("p")
  foodDescription[i].setAttribute("class","description")
  foodContainer[i].appendChild(foodDescription[i])

  foodPrice[i] = document.createElement("h3")
  foodPrice[i].setAttribute("class","price")
  foodContainer[i].appendChild(foodPrice[i])

  FoodPhoto[i] = document.createElement("img")
  FoodPhoto[i].setAttribute("class","food-photo")
  FoodPhoto[i].setAttribute("id","food-photo"+i)
  foodContainer[i].appendChild(FoodPhoto[i])


    }

    foodSection.appendChild(foodContainer[1])
    foodSection.appendChild(foodContainer[2])
    foodSection.appendChild(foodContainer[3])
    foodSection2.appendChild(foodContainer[4])  
    foodSection2.appendChild(foodContainer[5])
    foodSection2.appendChild(foodContainer[6]) 
    foodSection2.appendChild(foodContainer[7]) 
    foodSection2.appendChild(foodContainer[8])  
    foodSection3.appendChild(foodContainer[9])
    foodSection3.appendChild(foodContainer[10])
    foodSection3.appendChild(foodContainer[11])  

    //food elements content
    foodTitle[1].textContent = "Glazed Lemon-Ginger Scones"
    foodDescription[1].textContent = "Lemony, cream-based scones are light, moist, and laced with pieces of chewy candied ginger."
    foodPrice[1].textContent = "2.99$"
    FoodPhoto[1].src ="img/food/HD-201301-r-glazed-lemon-ginger-scones-66d73b52965e4ff5980d7505ee827dd1.jpg"

    foodTitle[2].textContent = "Lemon Curd Toasts with Coconut"
    foodDescription[2].textContent = "Olive oil and cocoa butter make this lemony curd extraordinarily creamy and luscious. Spread on baguette toasts, it becomes a fantastic dessert."
    foodPrice[2].textContent = "4.99$"
    FoodPhoto[2].src ="img/food/RECIPE1215-XL-lemon-curd-toasts-with-coconut-00041018347b4a69bfe289ba9753e01e.jpg"

    foodTitle[3].textContent = "Lemon-Almond Cake with Roasted Rhubarb"
    foodDescription[3].textContent = "This tender, lemon-scented almond cake is topped with roasted rhubarb, but is equally delicious with any kind of fresh or roasted fruit, like roasted strawberries, fresh orange segments, or roasted plums."
    foodPrice[3].textContent = "8$"
    FoodPhoto[3].src ="img/food/Flourless-Rhubarb-Cake-FT-RECIPE0520-2000-dd46611f23034608ac97761d26302ad4.jpg"
    
    foodTitle[4].textContent = "Squid and Summer Vegetable Salad"
    foodDescription[4].textContent = "This seafood salad from Provence, combines simply poached squid, a piquant dressing, and a mix of super-thinly sliced vegetables made extra crisp thanks to a soak in an ice water bath."
    foodPrice[4].textContent = "12.99$"
    FoodPhoto[4].src = "img/food/squid-and-summer-vegetable-salad-with-preserved-lemon-dressing-XL-RECIPE0816-65319551486e465fbecea208ac216217.jpg"

    foodTitle[5].textContent = "Shrimp & Lemon Spaghetti"
    foodDescription[5].textContent = "A variant the classic spaghetti Ajo, Ojo e peperoncino (garlic, oil and chile), embellishing it with shrimp, lemon, pecorino, almond, and mint. It's simple, delicious and crowd-pleasing."
    foodPrice[5].textContent = "10$"
    FoodPhoto[5].src ="img/food/spaghetti-with-shrimp-lemon-mint-and-pecorino-XL-RECIPE0916-140de4aeed3a4e4bb2bc17d1061af5a3.jpg"

    foodTitle[6].textContent = "Chicken Freekeh Skillet "
    foodDescription[6].textContent = "Includes firm feta cheese that gently warms to the point that it becomes soft and almost gooey The relish also gets a brazen hit of citrus from chopped lemon sections, which offer a tart, juicy bursts that are way more forward than lemon juice would be"
    foodPrice[6.].textContent = "14.99$"
    FoodPhoto[6].src ="img/food/lemon-chicken-freekah-skillet-1-FT-RECIPE0320-b026acd4c26447eb9b36cafb9a4688fa.jpg"

    foodTitle[7].textContent = "Creamy Lemon Pasta"
    foodDescription[7].textContent = "The dish originated at L'Antica Trattoria in Sorrento, where lemon juice is tossed with just-cooked pasta until absorbed. Supremes of lemon add a juicy, tart pop that cuts through the cream in the sauce."
    foodPrice[7].textContent = "9.99$"
    FoodPhoto[7].src ="img/food/creamy-lemon-pasta-XL-RECIPE0518-e0969821914f42feb579d81f2229a6e7.jpg"

    foodTitle[8].textContent = "Grilled King Salmon"
    foodDescription[8].textContent = "Floral and lightly acidic salsa brings out the buttery, rich flavors of grilled King salmon. Salmon is meaty enough to stay intact on a grill and gets meltingly tender as it cooks."
    foodPrice[8].textContent = "17.99$"
    FoodPhoto[8].src ="img/food/grilled-king-salmon-with-meyer-lemon-relish-FT-BLOG0320-5fbdf486250d4aae8be28405f9ada62b.jpg"

    foodTitle[9].textContent = "Gin Fizz"
    foodDescription[9].textContent = "This classic cocktail features gin and lemon juice. It's got a classic egg white foam, and is topped off with soda water."
    foodPrice[9].textContent = "4$"
    FoodPhoto[9].src ="img/food/Gin-Fizz-112-735x919.jpg"

    foodTitle[10].textContent = "Whiskey Smash"
    foodDescription[10].textContent = "This whiskey smash is tangy and refreshing, featuring muddled lemon wedges, fresh mint, and soda water. It's like a citrusy spin on the mint julep! Or, a minty spin on the whiskey sour. Serve it with lots of crushed ice; it's perfect for summer."
    foodPrice[10].textContent = "5.99$"
    FoodPhoto[10].src ="img/food/Whiskey-Smash-005-735x919.jpg"

    foodTitle[11].textContent = "Southside Cocktail"
    foodDescription[11].textContent = "Here's a unique lemon cocktail: the Southside! It’s minty, fresh, and botanical, made with lemon, lime, and gin. The best way to describe it? A Mojito with gin!"
    foodPrice[11].textContent = "3.5$"
    FoodPhoto[11].src ="img/food/Southside-Cocktail-001-735x919.jpg"




    

   }

   


  return genFoodElements()




  }


  const genContact = () => {

    const titleContainer = document.createElement("div")
    titleContainer.setAttribute("class","generic-container")
    titleContainer.setAttribute("id","contact-title-container")
    document.querySelector(".main-content").appendChild(titleContainer)
    
    const leafIcon = document.createElement("img")
    leafIcon.src ="img/leaf-icon.png"
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
    contactPhoto.src = "img/clank.png"
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
    contactPhoto2.src = "img/sackboy.png"
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

