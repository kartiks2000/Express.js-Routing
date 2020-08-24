// Routing
// We can do routing in the middleware functions by passing a extra parameter/argument.

// NOTE- VERY VERY IMPORTANT
// The order of the middleware function matters a lot in routing because if we visited "/mypage" but we have written the middleware function with route "/" first and "/mypage" later than it will excecute "/". 
// Hence order of middleware functions in routing matters a lot. 

const express = require('express');

const app = express();

app.use('/mypage',(req,res,next)=>{
    console.log("hell this is middleware function 1");
    res.send("Hello this is '/mypage' ");
});

app.use('/mainpage',(req,res,next)=>{
    console.log("hell this is middleware function 2");
    res.send("<h1>Hello this is '/mainpage' </h1>");
});

app.use('/',(req,res,next)=>{
    console.log("hell this is middleware function 3");
    res.send('<h1>Hello this is my response!!</h1>');
});


app.listen(3000);


// NOTE- VERY VERY IMPORTANT
// The order of the middleware function matters a lot in routing because if we visited "/mypage" but we have written the middleware function with route "/" first and "/mypage" later than it will excecute "/". 
// Hence order of middleware functions in routing matters a lot. 




