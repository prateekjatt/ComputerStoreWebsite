const path = require('path');
const express = require('express');
const session = require('express-session')
const app = express();
const port = 80;
const hostname = '0.0.0.0';

const {getTrends,connectDB} = require('./database.js')
const {userRouter} = require('./user.js')
const {productRouter} = require('./product.js')


connectDB()

app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }))
app.use(session({
  resave: true,
  saveUninitialized: true, 
  secret: 'aksdjfksdksdnvkjdf'
}));
app.use(express.json())


app.get('/',(req,res)=>{
    res.redirect('/index.html');
});





app.use(userRouter)
app.use(productRouter)


app.get('/trends',async(req,res)=>{
    let trends = await getTrends()
    res.send({trends:trends});
});




app.use(express.static(path.join(__dirname,'../Frontend/public')));

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/public/error.html'));
});

app.listen(port,hostname,()=>{
    console.log(`Server listening on ${hostname}:${port}`);
});



