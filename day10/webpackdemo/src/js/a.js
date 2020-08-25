export default function createDiv(){
    let div = document.createElement('div');
    div.innerHTML = "js创建的div"
    /* div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = 'red' */
    return div;
  }