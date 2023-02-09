import Icon from "./chicken.png";
import { landingPage } from "./landingPage";
import { menuLoad } from "./menu.js";
export function pageLoader(){
    const header = document.createElement('header');
    const section = document.createElement('section');
    const footer = document.createElement('footer');

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.addEventListener("click", () => {
        document.body.innerHTML = "";
        pageLoader();
        landingPage();
    })

    const headerList = document.createElement('ul');

    const headerMenu = document.createElement('li');
    headerMenu.innerHTML = "Menu";
    headerMenu.addEventListener("click", () => {
        document.body.innerHTML = "";
        menuLoad();
    })

    const headerLocations = document.createElement('li');
    headerLocations.textContent = "Locations";

    const headerAbout = document.createElement('li');
    headerAbout.textContent = "About";

    const headerBlog = document.createElement('li');
    headerBlog.textContent = "Blog";

    const headerOrder = document.createElement('li');
    headerOrder.textContent = "Order";

    headerList.append(
        headerMenu,
        headerLocations,
        headerAbout,
        headerBlog,
        headerOrder
    );
    header.append(headerList,myIcon)
    
    return document.body.appendChild(header,section,footer);
}