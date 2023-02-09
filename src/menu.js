import landingBG from "./landingBG.jpeg";
import { pageLoader } from "./pageLoad";
export function menuLoad(){
    pageLoader();
    const bg = new Image();
    bg.src = landingBG;
    bg.id = "landingBG";

    const hero = document.createElement('section');
    const menu = document.createElement('div');

    const menuTitle = document.createElement('h2');
    menuTitle.innerHTML = "Menu"

    const titleDesc = document.createElement('h3');
    titleDesc.textContent = "Turbo Chicken Only"

    const starterOne = document.createElement('div');
    starterOne.innerHTML = "<h4>Starters</h4><div class='foodPrice'><h6>Chicken Wings</h6><h6 class='red'>5$</h6></div>"

    const starterTwo = document.createElement('div');
    starterTwo.innerHTML = "<div class='foodPrice'><h6>Raw Eggs</h6><h6 class='red'>Free</h6></div>"

    const starterThree = document.createElement('div');
    starterThree.innerHTML = "<div class='foodPrice'><h6>Chicken with Ketchup</h6><h6 class='red'>1$</h6></div>"

    const mainOne = document.createElement('div');
    mainOne.innerHTML = "<h4>Mains</h4><div class='foodPrice'><h6>Chicken Soup</h6><h6 class='red'>50$</h6></div>"

    const mainTwo = document.createElement('div');
    mainTwo.innerHTML = "<div class='foodPrice'><h6>Chicken Juice</h6><h6 class='red'>20$</h6></div>"

    const mainThree = document.createElement('div');
    mainThree.innerHTML = "<div class='foodPrice'><h6>Raw Chicken Breast</h6><h6 class='red'>Free</h6></div>"

    const menuItems = document.createElement('div');
    menuItems.style = "border: 1px solid black; display: flex; flex-direction: row; padding: 3rem;gap: 3rem; text-align: center;"
    const starters = document.createElement('div');
    starters.append(starterOne,starterTwo,starterThree)
    const mains = document.createElement('div');
    mains.append(mainOne,mainTwo,mainThree)
    menuItems.append(starters,mains)

    menu.append(menuItems)
    hero.append(menu)
    document.body.append(hero);
}