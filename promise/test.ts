import Promise from './promise';

const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('成功了')
    }, 5);
})

p.then((data)=>{
    console.log('data',data);
},()=>{})