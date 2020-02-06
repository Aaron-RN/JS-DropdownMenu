import DropDownMenu from './dropdown';

class MenuHandler {
  constructor() {
    this.menus = [];
  }

  constructMenus() {
    const dropDowns = document.querySelectorAll('*[data-dropDownMenu]');

    dropDowns.forEach((elem) => {
      this.addMenu(new DropDownMenu(elem, this));
    });

    const menuBackground = document.createElement('div');
    this.menuBackground = menuBackground;
    menuBackground.classList.add('aa-menuBG');
    menuBackground.classList.add('aa-dropDown-hide');
    menuBackground.addEventListener('click', () => {
      this.hideMenus();
    });

    document.body.appendChild(menuBackground);
  }

  allMenus() { return this.menus; }

  addMenu(dropdown) { this.menus.push(dropdown); }

  hideMenus() {
    const menus = this.allMenus();
    this.menuBackground.classList.toggle('aa-dropDown-hide');
    menus.forEach((elem) => elem.hideMenu());
  }
}

export default MenuHandler;
