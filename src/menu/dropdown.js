class DropDownMenu {
  constructor(element, handler) {
    this.handler = handler;
    this.mainElement = element;
    const mainElementContent = Array.from(this.mainElement.children);
    this.content = mainElementContent.find((elem) => elem.getAttribute('data-dropDownContent', 'true'));
    this.dropDownItems = Array.from(this.content.children);

    this.mainElement.classList.add('aa-dropDownMenu');
    this.content.classList.add('aa-dropDownContent');
    this.dropDownItems.forEach(child => child.classList.add('aa-dropDown-item'));

    this.mainElement.addEventListener('click', () => {
      this.handler.hideMenus(this);
      this.handler.menuBackground.classList.remove('aa-dropDown-hide');
      this.content.classList.toggle('aa-dropDown-show');
    });
  }

  hideMenu() { this.content.classList.remove('aa-dropDown-show'); }
}

export default DropDownMenu;