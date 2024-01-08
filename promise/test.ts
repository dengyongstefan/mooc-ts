import Promise from './promise';

const p = new Promise((resolve,reject)=>{
    resolve('成功了')
})

p.then((data)=>{
    console.log('data',data);
},()=>{})