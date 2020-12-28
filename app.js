const express = require('express');
const app =express();
const port = 8888;

app.use(express.static("css"));
app.use(express.static("img"));
app.use(express.static("js"));

app.set('views','views');

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index');
})
app.get('/Products', (req,res)=>{
    res.render('Products');
})
app.get('/Products-details', (req,res)=>{
    res.render('Product-details');
})
app.get('/cart', (req,res)=>{
    res.render('cart');
})
app.listen(port,function (){
    console.log('Example app listening on port' + port)
});
