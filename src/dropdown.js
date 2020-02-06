class MenuHandler{
  constructor(){
    this.menus = [];
  }
  
  constructMenus(){
    const dropDowns = document.querySelectorAll("*[data-dropDownMenu]");
  
    dropDowns.forEach( (elem) => { 
      this.addMenu(new DropDownMenu(elem));
    });
  }
  
  allMenus(){
    console.log(this.menus);
  }
  
  addMenu(dropdown){
    this.menus.push(dropdown);
  }
}

class DropDownMenu{
  constructor(element){
    this.mainElement = element;
    const mainElementContent = Array.from(this.mainElement.children);
    this.content = mainElementContent.find( (elem) => elem.getAttribute('data-dropDownContent', 'true'));
    this.dropDownItems = Array.from(this.content.children);
    
    this.mainElement.classList.add("aa-dropDownMenu");
    this.content.classList.add("aa-dropDownContent");
    this.dropDownItems.forEach( child => child.classList.add("aa-dropDown"));
    
    this.mainElement.addEventListener('click', () => {
      this.content.classList.toggle('dropDown-show')
    })
  }
}

export default MenuHandler;
