import '../css/dropdown.css';
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

  // Hides all menus except the one passed as a parameter
  hideMenus(dropdown) {
    const menus = this.allMenus();
    this.menuBackground.classList.add('aa-dropDown-hide');
    menus.forEach((elem) => {
      if (dropdown !== elem) { elem.hideMenu(); }
    });
  }
}

export default MenuHandler;
