import './css/dropdown.css';
import MenuHandler from './dropdown';

const menuHandler = new MenuHandler();
menuHandler.constructMenus();
menuHandler.allMenus();

function test(){
  const p = document.createElement('p');
  p.innerHTML = `Now, the next thing we want to do is rotate the bottom cat upside down, using the transform property. That way, both cats will be underneath the white block, with only their heads sticking out.

But doing so can cause more z-index-related confusion. We’ll address the problem and the solution in the next part.

3. Setting some CSS p`;
  
  document.body.appendChild(p);
}

test();

