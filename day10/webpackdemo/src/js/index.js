import div from './a.js';
import p from './b.js';

// 引入b.css
import '../css/b.css'

// 引入less文件
import a from '../less/a.less'

let divEle=div();
divEle.className=a.con

// 引入图片
import img from '../img/luelue.JPG'

let pic=document.createElement('img');
pic.src=img;

document.body.appendChild(divEle)
document.body.appendChild(p())
document.body.appendChild(pic)

