const resp = [{
  "type": "Veg Snacks", 
  "items": [{ "title": "French Fries", "price": 250},
	{ "title": "Alu Dum", "price": 250},
	{ "title": "Alu Sadheko", "price": 250},
	{ "title": "Alu Timur", "price": 200},
	{ "title": "Alu Zimbu", "price": 250},
	{ "title": "Alu Zimbu Fin", "price": 300},
	{ "title": "Gundruk Ko Jhol", "price": 200},
	{ "title": "Bhatmas Sadheko", "price": 150},
	{ "title": "Peanuts Sadheko", "price": 150},
	{ "title": "Phapar Ko Roti(Ghoken)", "price": 150},
	{ "title": "Kanchamba(Phaper Ko Fries", "price": 200}]
},
{
  "type": "Non-Veg Snacks", 
  "items": [{ "title": "Andda Alu Timur", "price": 250},
	{ "title": "Chicken Chilly", "price": 350},
	{ "title": "Chicken Fried Nepali Style", "price": 350},
	{ "title": "Chicken Sausages(Chilly)", "price": 300},
	{ "title": "Chicken Curry", "price": 250},
	{ "title": "Egg Curry", "price": 200},
	{ "title": "Bhuttan(Mutton)", "price": 250}]
},
{
  "type": "Mo Mo", 
  "items": [{ "title": "Chicken MoMo", "price": 250},
	{ "title": "Veg MoMo", "price": 200}]
},
{
  "type": "Rice", 
  "items": [{ "title": "Steamed Rice", "price": 100},
	{ "title": "Veg Fried Rice", "price": 200},
	{ "title": "Egg Fried Rice", "price": 200},
	{ "title": "Chicken Fried Rice", "price": 250},
	{ "title": "Chicken Curry With Rice", "price": 280},
	{ "title": "Egg Curry With Rice", "price": 250}]
},
{
  "type": "Sukuti", 
  "items": [{ "title": "Alu Sukuti Zimbu", "price": 850},
	{ "title": "Mutton Sukuti Sadheko", "price": 795}]
  }]

let modalAboutUs = document.querySelector(".modalAboutus");
let modalMenu = document.querySelector(".modalMenu");
const headerNav = document.querySelectorAll(".header__navs .header__link");
const buttonCloseMenu = document.querySelector(".modal__close-menu");
const buttonCloseAbout = document.querySelector(".modal__close-aboutus");

headerNav.forEach(function (item) {  
  item.addEventListener('click', event => {
    switch (item.innerHTML)
    {
      case 'Menu':
          modalMenu.style.display = "block";
        break;
      case 'About us':
        modalAboutUs.style.display = "block";
        break;
    }   
  })
});

buttonCloseMenu.addEventListener('click', event => {  
    modalMenu.style.display = "none";
})

buttonCloseAbout.addEventListener('click', event => {
    modalAboutUs.style.display = "none";
})


//var xmlhttp = new XMLHttpRequest();
//xmlhttp.onreadystatechange = function () {
  //console.log('hello');
  //if (this.readyState == 4 && this.status == 200) {    
    let otherMenus = document.querySelector('.content__othermenuset');
    resp.map((r) => {
      let divMenus = document.createElement('div');
      divMenus.className = 'menus';
      /* append h1 */
      let menuType = document.createElement('h1');
      menuType.className = 'menus__type';
      menuType.innerHTML = r.type;
      divMenus.appendChild(menuType);
      /* end h1 */
      /* append div */
      let divMenuItems = document.createElement('div');
      divMenus.className = 'menuItems';
      r.items.map((item) => {
        let divmenuItem = document.createElement('div');
        divmenuItem.className = 'menuItem';
        let h2_title = document.createElement('h2');
        h2_title.className = 'menuItem__title';
        h2_title.innerHTML = item.title;
        divmenuItem.appendChild(h2_title);
        let h2_price = document.createElement('h2');
        h2_price.className='menuItem__price'      
        h2_price.innerHTML = item.price;
        divmenuItem.appendChild(h2_price); 

        divMenus.appendChild(divmenuItem);
      });        
      /* end div */
      divMenus.appendChild(divMenuItems);
      otherMenus.appendChild(divMenus);
    })
   
  //}
//};
//xmlhttp.open("GET", "./js/data.json", true);
//xmlhttp.send();