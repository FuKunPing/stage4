import div from './a.js'

// 引入a.css样式
//(使用了扩展，可以不写后缀)
// import a from '../css/a'

// 使用别名
import a from '@css/a'


let divEle=div();
// divEle.className='con' //直接写字符串无法匹配，没有样式
divEle.className=a.con
document.body.appendChild(divEle)