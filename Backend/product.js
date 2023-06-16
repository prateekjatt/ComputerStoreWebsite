const path = require('path')
const express = require('express')
const router = express.Router()
const {getItem} = require('./database')

router.get('/product/:id',async(req,res)=>{

    let product = await getItem(req.params.id)
    
    if(product) res.render('product',{product:product});
    else res.sendFile(path.join(__dirname,'../Frontend/public/error.html'));
});

module.exports.productRouter = router;