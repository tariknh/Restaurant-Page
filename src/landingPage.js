import landingBG from "./landingBG.jpeg";
export function landingPage(){
    const bg = new Image();
    bg.src = landingBG;
    bg.id = "landingBG";

    const hero = document.createElement('section');
    const menu = document.createElement('div');

    const menuTitle = document.createElement('h2');
    menuTitle.innerHTML = "Our <br> Locations"

    const titleDesc = document.createElement('h3');
    titleDesc.textContent = "The Best Chicken In Town"

    const locationOne = document.createElement('div');
    locationOne.innerHTML = "<h4>Stavanger</h4><h5>Chicken Street</h5>"

    const locationTwo = document.createElement('div');
    locationTwo.innerHTML = "<h4>Oslo</h4><h5>Chicken Wing Street</h5>"

    const locations = document.createElement('div');
    locations.style = "display: flex; justify-content: space-between; text-align: center;"
    locations.append(locationOne,locationTwo)

    menu.append(menuTitle,titleDesc,locations)

    const title = document.createElement('h1');
    title.textContent = ('Welcome');

    hero.append(title);
    hero.append(menu)
    document.body.append(hero);
}