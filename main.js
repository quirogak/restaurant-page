(()=>{const t=document.getElementById("content"),e=document.createElement("header"),n=document.createElement("main"),o=document.createElement("footer");t.appendChild(e),t.appendChild(n),t.appendChild(o);const i=document.createElement("div");i.setAttribute("class","nav-bar"),e.appendChild(i);for(let t=1;t<=3;t++){const e=document.createElement("button");e.setAttribute("class","nav-button"),e.setAttribute("id","button"+t),i.appendChild(e)}document.querySelector("#button1").textContent="Home",document.querySelector("#button2").textContent="Menu",document.querySelector("#button3").textContent="Contact";const c=document.createElement("div");c.setAttribute("class","main-content"),n.appendChild(c);const a=document.createElement("a");a.setAttribute("class","footer-text"),o.appendChild(a),a.textContent="@quirogak",a.href="https://github.com/quirogak";const s=document.createElement("p");s.setAttribute("class","footer-text"),o.appendChild(s),s.textContent="Background photo by DashaDee from PixaBay"})(),(()=>{const t=document.querySelector("#button1"),e=document.querySelector("#button2"),n=document.querySelector("#button3"),o=o=>{"button1"==o.target.id&&(document.querySelector(".main-content").textContent="",t.setAttribute("style","border: 4px solid rgb(241, 209, 28);"),e.setAttribute("style","border: 2px solid black;"),n.setAttribute("style","border: 2px solid black;")),"button2"==o.target.id&&(document.querySelector(".main-content").textContent="",e.setAttribute("style","border: 4px solid rgb(241, 209, 28);"),t.setAttribute("style","border: 2px solid black;"),n.setAttribute("style","border: 2px solid black;")),"button3"==o.target.id&&(document.querySelector(".main-content").textContent="",n.setAttribute("style","border: 4px solid rgb(241, 209, 28);"),e.setAttribute("style","border: 2px solid black;"),t.setAttribute("style","border: 2px solid black;"))};window.onload=()=>{t.click()},t.addEventListener("click",o),t.addEventListener("click",(()=>{const t=document.createElement("div");t.setAttribute("class","generic-container"),t.setAttribute("id","home-title"),document.querySelector(".main-content").appendChild(t);const e=document.createElement("img");e.src="../img/leaf-icon.png",e.setAttribute("class","leaf-icon"),t.appendChild(e);const n=document.createElement("h2");n.setAttribute("class","title"),t.appendChild(n),n.textContent="Planeta Limón";const o=document.createElement("div");o.setAttribute("class","generic-container"),o.setAttribute("id","desc-text"),document.querySelector(".main-content").appendChild(o);const i=document.createElement("p");i.setAttribute("class","p-text"),o.appendChild(i),i.textContent="Welcome to Planeta Limón, the worlds most famous lemon-based restaurant, where every meal are made of natural and delicious lemons. Come and enjoy this acid but delicious flavoured adventure!";const c=document.createElement("p");c.setAttribute("class","p-phrase"),o.appendChild(c),c.textContent="When life gives you lemons, visit Planeta Limón and get a discount!";const a=document.createElement("img");a.src="../img/lemon-icon.png",a.setAttribute("class","lemon-icon"),o.appendChild(a);const s=document.createElement("div");s.setAttribute("class","generic-container"),s.setAttribute("id","hours-text"),document.querySelector(".main-content").appendChild(s);const d=document.createElement("h2");d.setAttribute("class","sub-title"),s.appendChild(d),d.textContent="Hours";const r=document.createElement("p");r.setAttribute("class","p-phrase"),r.setAttribute("id","opening-hours"),s.appendChild(r),r.textContent="Monday: 8am - 6pm Tuesday: 8am - 6pm Wednesday: 8am - 6pm Thursday: 8am - 5pm Friday: 7am - 9pm Saturday: 6am - 10pm Sunday: 8am - 10pm ";const l=document.createElement("img");l.src="../img/half-lemon.png",l.setAttribute("class","half-lemon-icon"),s.appendChild(l);const m=document.createElement("div");m.setAttribute("class","generic-container"),m.setAttribute("id","location-container"),document.querySelector(".main-content").appendChild(m);const u=document.createElement("h2");u.setAttribute("class","sub-title"),m.appendChild(u),u.textContent="Location";const p=document.createElement("p");p.setAttribute("class","p-phrase"),p.setAttribute("id","location-text"),m.appendChild(p),p.textContent="3322 Km 18, Cali, Colombia";const h=document.createElement("img");h.src="../img/leaf-icon.png",h.setAttribute("class","leaf-icon"),h.setAttribute("id","leaf-icon2"),m.appendChild(h)})),e.addEventListener("click",o),e.addEventListener("click",(()=>{const t=document.createElement("div");t.setAttribute("class","generic-container"),t.setAttribute("id","menu-title-container"),document.querySelector(".main-content").appendChild(t);const e=document.createElement("img");e.src="../img/leaf-icon.png",e.setAttribute("class","leaf-icon"),t.appendChild(e);const n=document.createElement("h2");return n.setAttribute("class","title"),t.appendChild(n),n.textContent="Menu",(()=>{const t=document.createElement("div");t.setAttribute("class","food-section"),document.querySelector(".main-content").appendChild(t);const e=document.createElement("div");e.setAttribute("class","food-section"),document.querySelector(".main-content").appendChild(e);const n=document.createElement("div");n.setAttribute("class","food-section"),document.querySelector(".main-content").appendChild(n);const o=document.createElement("h2");o.setAttribute("class","generic-container"),o.setAttribute("id","appetizers-title"),t.appendChild(o),o.textContent="Desserts";const i=document.createElement("img");i.src="../img/lemon-icon.png",i.setAttribute("class","lemon-icon"),i.setAttribute("id","lemon-icon2"),o.appendChild(i);const c=document.createElement("img");c.src="../img/lemon-icon.png",c.setAttribute("class","lemon-icon"),c.setAttribute("id","lemon-icon3"),o.appendChild(c);const a=document.createElement("h2");a.setAttribute("class","generic-container"),a.setAttribute("id","main-course-title"),e.appendChild(a),a.textContent="Main";const s=document.createElement("img");s.src="../img/lemon-icon.png",s.setAttribute("class","lemon-icon"),s.setAttribute("id","lemon-icon4"),a.appendChild(s);const d=document.createElement("img");d.src="../img/lemon-icon.png",d.setAttribute("class","lemon-icon"),d.setAttribute("id","lemon-icon5"),a.appendChild(d);const r=document.createElement("h2");r.setAttribute("class","generic-container"),r.setAttribute("id","beverages-title"),n.appendChild(r),r.textContent="Beverages";const l=document.createElement("img");l.src="../img/lemon-icon.png",l.setAttribute("class","lemon-icon"),l.setAttribute("id","lemon-icon6"),r.appendChild(l);const m=document.createElement("img");m.src="../img/lemon-icon.png",m.setAttribute("class","lemon-icon"),m.setAttribute("id","lemon-icon7"),r.appendChild(m);let u=[],p=[],h=[],b=[],C=[];for(let t=1;t<=11;t++)u[t]=document.createElement("div"),u[t].classList.add("food-container","generic-container"),u[t].setAttribute("id","food-"+t),p[t]=document.createElement("h3"),p[t].setAttribute("class","name"),u[t].appendChild(p[t]),h[t]=document.createElement("p"),h[t].setAttribute("class","description"),u[t].appendChild(h[t]),b[t]=document.createElement("h3"),b[t].setAttribute("class","price"),u[t].appendChild(b[t]),C[t]=document.createElement("img"),C[t].setAttribute("class","food-photo"),C[t].setAttribute("id","food-photo"+t),u[t].appendChild(C[t]);t.appendChild(u[1]),t.appendChild(u[2]),t.appendChild(u[3]),e.appendChild(u[4]),e.appendChild(u[5]),e.appendChild(u[6]),e.appendChild(u[7]),e.appendChild(u[8]),n.appendChild(u[9]),n.appendChild(u[10]),n.appendChild(u[11]),p[1].textContent="Glazed Lemon-Ginger Scones",h[1].textContent="Lemony, cream-based scones are light, moist, and laced with pieces of chewy candied ginger.",b[1].textContent="2.99$",C[1].src="../img/food/HD-201301-r-glazed-lemon-ginger-scones-66d73b52965e4ff5980d7505ee827dd1.jpg",p[2].textContent="Lemon Curd Toasts with Coconut",h[2].textContent="Olive oil and cocoa butter make this lemony curd extraordinarily creamy and luscious. Spread on baguette toasts, it becomes a fantastic dessert.",b[2].textContent="4.99$",C[2].src="../img/food/RECIPE1215-XL-lemon-curd-toasts-with-coconut-00041018347b4a69bfe289ba9753e01e.jpg",p[3].textContent="Lemon-Almond Cake with Roasted Rhubarb",h[3].textContent="This tender, lemon-scented almond cake is topped with roasted rhubarb, but is equally delicious with any kind of fresh or roasted fruit, like roasted strawberries, fresh orange segments, or roasted plums.",b[3].textContent="8$",C[3].src="../img/food/Flourless-Rhubarb-Cake-FT-RECIPE0520-2000-dd46611f23034608ac97761d26302ad4.jpg",p[4].textContent="Squid and Summer Vegetable Salad",h[4].textContent="This seafood salad from Provence, combines simply poached squid, a piquant dressing, and a mix of super-thinly sliced vegetables made extra crisp thanks to a soak in an ice water bath.",b[4].textContent="12.99$",C[4].src="../img/food/squid-and-summer-vegetable-salad-with-preserved-lemon-dressing-XL-RECIPE0816-65319551486e465fbecea208ac216217.jpg",p[5].textContent="Shrimp & Lemon Spaghetti",h[5].textContent="A variant the classic spaghetti Ajo, Ojo e peperoncino (garlic, oil and chile), embellishing it with shrimp, lemon, pecorino, almond, and mint. It's simple, delicious and crowd-pleasing.",b[5].textContent="10$",C[5].src="../img/food/spaghetti-with-shrimp-lemon-mint-and-pecorino-XL-RECIPE0916-140de4aeed3a4e4bb2bc17d1061af5a3.jpg",p[6].textContent="Chicken Freekeh Skillet ",h[6].textContent="Includes firm feta cheese that gently warms to the point that it becomes soft and almost gooey The relish also gets a brazen hit of citrus from chopped lemon sections, which offer a tart, juicy bursts that are way more forward than lemon juice would be",b[6].textContent="14.99$",C[6].src="../img/food/lemon-chicken-freekah-skillet-1-FT-RECIPE0320-b026acd4c26447eb9b36cafb9a4688fa.jpg",p[7].textContent="Creamy Lemon Pasta",h[7].textContent="The dish originated at L'Antica Trattoria in Sorrento, where lemon juice is tossed with just-cooked pasta until absorbed. Supremes of lemon add a juicy, tart pop that cuts through the cream in the sauce.",b[7].textContent="9.99$",C[7].src="../img/food/creamy-lemon-pasta-XL-RECIPE0518-e0969821914f42feb579d81f2229a6e7.jpg",p[8].textContent="Grilled King Salmon",h[8].textContent="Floral and lightly acidic salsa brings out the buttery, rich flavors of grilled King salmon. Salmon is meaty enough to stay intact on a grill and gets meltingly tender as it cooks.",b[8].textContent="17.99$",C[8].src="../img/food/grilled-king-salmon-with-meyer-lemon-relish-FT-BLOG0320-5fbdf486250d4aae8be28405f9ada62b.jpg",p[9].textContent="Gin Fizz",h[9].textContent="This classic cocktail features gin and lemon juice. It's got a classic egg white foam, and is topped off with soda water.",b[9].textContent="4$",C[9].src="../img/food/Gin-Fizz-112-735x919.jpg",p[10].textContent="Whiskey Smash",h[10].textContent="This whiskey smash is tangy and refreshing, featuring muddled lemon wedges, fresh mint, and soda water. It's like a citrusy spin on the mint julep! Or, a minty spin on the whiskey sour. Serve it with lots of crushed ice; it's perfect for summer.",b[10].textContent="5.99$",C[10].src="../img/food/Whiskey-Smash-005-735x919.jpg",p[11].textContent="Southside Cocktail",h[11].textContent="Here's a unique lemon cocktail: the Southside! It’s minty, fresh, and botanical, made with lemon, lime, and gin. The best way to describe it? A Mojito with gin!",b[11].textContent="3.5$",C[11].src="../img/food/Southside-Cocktail-001-735x919.jpg"})()})),n.addEventListener("click",o),n.addEventListener("click",(()=>{const t=document.createElement("div");t.setAttribute("class","generic-container"),t.setAttribute("id","contact-title-container"),document.querySelector(".main-content").appendChild(t);const e=document.createElement("img");e.src="../img/leaf-icon.png",e.setAttribute("class","leaf-icon"),e.setAttribute("id","leaf-icon3"),t.appendChild(e);const n=document.createElement("h2");n.setAttribute("class","title"),n.setAttribute("id","contact-title"),t.appendChild(n),n.textContent="Contact us";const o=document.createElement("div");o.setAttribute("class","generic-container"),o.setAttribute("id","contact-1"),document.querySelector(".main-content").appendChild(o);const i=document.createElement("div");i.setAttribute("class","info-container"),o.appendChild(i);const c=document.createElement("h3");c.setAttribute("class","name"),i.appendChild(c),c.textContent="Clank";const a=document.createElement("p");a.setAttribute("class","details"),i.appendChild(a),a.textContent="CEO";const s=document.createElement("p");s.setAttribute("class","details"),i.appendChild(s),s.textContent=" +57 324112333 ";const d=document.createElement("p");d.setAttribute("class","details"),i.appendChild(d),d.textContent="EmailRandomExample@gmail.com";const r=document.createElement("img");r.src="../img/clank.png",r.setAttribute("class","profile-pic"),o.appendChild(r);const l=document.createElement("div");l.setAttribute("class","generic-container"),l.setAttribute("id","contact-2"),document.querySelector(".main-content").appendChild(l);const m=document.createElement("div");m.setAttribute("class","info-container"),l.appendChild(m);const u=document.createElement("h3");u.setAttribute("class","name"),m.appendChild(u),u.textContent="Sackboy";const p=document.createElement("p");p.setAttribute("class","details"),m.appendChild(p),p.textContent="Chef";const h=document.createElement("p");h.setAttribute("class","details"),m.appendChild(h),h.textContent=" +57 325123222";const b=document.createElement("p");b.setAttribute("class","details"),m.appendChild(b),b.textContent="EmailRandomExample@gmail.com";const C=document.createElement("img");C.src="../img/sackboy.png",C.setAttribute("class","profile-pic"),l.appendChild(C);const g=document.createElement("div");g.setAttribute("class","generic-container"),g.setAttribute("id","contact-3"),document.querySelector(".main-content").appendChild(g);const A=document.createElement("div");A.setAttribute("class","info-container"),g.appendChild(A);const f=document.createElement("h3");f.setAttribute("class","name"),A.appendChild(f),f.textContent="Birdy";const E=document.createElement("p");E.setAttribute("class","details"),A.appendChild(E),E.textContent="Receptionist";const x=document.createElement("p");x.setAttribute("class","details"),A.appendChild(x),x.textContent=" +34 124112737 ";const y=document.createElement("p");y.setAttribute("class","details"),A.appendChild(y),y.textContent="EmailRandomExample@gmail.com";const k=document.createElement("img");k.src="../img/birdy.png",k.setAttribute("class","profile-pic"),g.appendChild(k)}))})();