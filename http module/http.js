// https

const http= require('http');

const req=http.request('http://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data chunk ${chunk}`);
    })
    req.on('end',()=>{
        console.log('no more data');
    })
})

req.end();


// https

// const http= require('https');

// const req=http.request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data chunk ${chunk}`);
//     })
//     req.on('end',()=>{
//         console.log('no more data' );
//     })
// })

// req.end();

// request 

// const {request }= require('https');

// const req=request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data chunk ${chunk}`);
//     })
//     req.on('end',()=>{
//         console.log('no more data' );
//     })
// })

// req.end();

//get

// const {get}= require('https');

// get('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data chunk ${chunk}`);
//     })
// })

