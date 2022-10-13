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


  //header content
  const title = document.createElement("h1")
  title.setAttribute("class","main-title")
  title.textContent = "Planeta Limón"
  header.appendChild(title)

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

    button1.setAttribute('style', 'border: 2px solid rgb(243, 226, 131);')
    button2.setAttribute('style', 'border: none;')
    button3.setAttribute('style', 'border: none;')
   }

   
   if (e.target.id == "button2" ){
    button2.setAttribute('style', 'border: 2px solid rgb(243, 226, 131);')
    button1.setAttribute('style', 'border: none;')
    button3.setAttribute('style', 'border: none;')
   }
   
   if (e.target.id == "button3" ){
    button3.setAttribute('style', 'border: 2px solid rgb(243, 226, 131);')
    button2.setAttribute('style', 'border: none;')
    button1.setAttribute('style', 'border: none;')
   }
   

    
  }


  const genHome = () => {


  }



  button1.addEventListener("click", buttonSwitch)

  button2.addEventListener("click", buttonSwitch)

  button3.addEventListener("click", buttonSwitch)

})();

