const staticElements = (() => {

    const mainContainer = document.getElementById("content")

  //basic structure
  const header = document.createElement("header")
  const main = document.createElement("main")
  const footer = document.createElement("foooter")
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

    
  


 



})();

