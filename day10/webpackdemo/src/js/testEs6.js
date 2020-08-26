let [a,b,c] = [3,2,1];
function show(...aa){
    console.log(aa);
}

show(11,22,33,44)

let p =new Promise(resolve=>{
    setTimeout(()=>{
        console.log(a);
        resolve()
    },1000)
})

p.then(()=>{
    console.log('over');
})