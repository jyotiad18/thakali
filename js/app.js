let modalAboutUs = document.querySelector(".modalAboutus");
let modalMenu = document.querySelector(".modalMenu");
const headerNav = document.querySelectorAll(".header__navs .header__link");
const buttonCloseMenu = document.querySelector(".modal__close-menu");
const buttonCloseAbout = document.querySelector(".modal__close-aboutus");

headerNav.forEach(function (item) {  
  item.addEventListener('click', event => {
    event.preventDefault();
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
    event.preventDefault();    
    modalMenu.style.display = "none";
})

buttonCloseAbout.addEventListener('click', event => {
    event.preventDefault();    
    modalAboutUs.style.display = "none";
})


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const resp = JSON.parse(this.responseText);
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
   
  }
};
xmlhttp.open("GET", "./js/data.json", true);
xmlhttp.send();