// 发送请求获取数据
// 引入jq
import $ from 'jquery'

// 获取某个分类的小说列表
function getNovelList(id){
    // 解决返回的异步问题
    return new Promise((resolve,reject)=>{
        let url=`http://www.biquge.info/list/${id}_1.html`;
        // console.log(url)
        $.ajax({
            url:'http://localhost:4000/getdata',
            // url作为参数传进去
            data:{url:url},
            success(result){
                // console.log(result)
                let $dom=$(result);
                let $items=$dom.find('.item')
                // console.log($items);
                let data=[];
                // 循环遍历
                $items.each((idx,val)=>{
                    // console.log(val)
                    let path=$(val).find('a').attr("href");
                    let img=$(val).find('img').attr("src");
                    let name=$(val).find('img').attr("alt");
                    let author=$(val).find("span").html();
                    let desc=$(val).find('dd').html();
                    // 把数据放到data
                    data.push({
                        path,img,name,author,desc
                    });
                });
                // 返回数据(不能直接返回，用回调或者promise解决异步)
                resolve(data)
            },
            error(err){
                // console.log(err)
                reject(err)
            }
        });
    })
}   

// 获取某个小说的章节列表 path:小说的请求地址
function getChapter(path){
    return new Promise(resolve=>{
        $.ajax({
            url:"http://localhost:4000/getdata",
            data:{url:path},
            success(result){
                // console.log(result)
                let $dds=$(result).find("#list dd");
                let chapters=[];
                $dds.each((idx,val)=>{
                    let $a=$(val).find('a');
                    let url=path+$a.attr("href");
                    let title=$a.attr("title");
                    chapters.push({url,title});
                })
                resolve(chapters);
            }
        })
    })
}

// 获取小说某个章节的内容
function getContent(path){
    return new Promise(resolve=>{
        $.ajax({
            url:"http://localhost:4000/getdata",
            data:{url:path},
            success(result){
                // console.log(path); 路径
                // console.log(result); 点击的章节内容页面
                let content=$(result).find('#content').html();
                resolve(content)
            }
        })

    })


}

export default {
    getNovelList,
    getChapter,
    getContent
}
