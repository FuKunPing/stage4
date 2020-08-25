import div from './a.js';
import p from './b.js';

// 引入b.css
import '../css/b.css'

// 引入less文件
import '../less/a.less'


console.log(div())
console.log(p())

document.body.appendChild(div())
document.body.appendChild(p())
