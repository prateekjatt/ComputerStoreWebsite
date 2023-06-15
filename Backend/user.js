const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const {getUser,addUser,addItem,removeItem,getWishlist} = require('./database')

router.post('/wishlist/addItem',async(req,res)=>{

    if(!req.session.email){
        res.status(302)
        res.send({success:false,msg:"You need to Login!"})
    }
    else{
        if(addItem({email:req.session.email},req.body.itemId)){
            res.send({success:true,msg:"Item Successfully Added."})
        }
        else res.send({success:false,msg:"Some Error Occured!"})
    }
});

router.post('/wishlist/removeItem',async(req,res)=>{

    if(!req.session.email){
        res.status(302)
        res.send({success:false,msg:"You need to Login!"})
    }
    else{
        if(removeItem({email:req.session.email},req.body.itemId)){
            res.send({success:true,msg:"Item Successfully Removed."})
        }
        else res.send({success:false,msg:"Some Error Occured!"})
    }
});

router.get('/wishlist/getWishlist',async(req,res)=>{

    if(!req.session.email){
        res.status(302)
        res.send({success:false,msg:"You need to Login!"})
    }
    else{
        let result = await getWishlist({email:req.session.email})
        res.send({success:true,wishlist:result})
    }
});

router.get('/user/signOut',async(req,res)=>{
    if(req.session){
        req.session.destroy()
        res.send({success:true,msg:"Logout Successful."})
    }
    else res.send({success:false,msg:"Unable to Logout!"})
});

router.post('/user/signIn',async(req,res)=>{

    let usr = await getUser({email:req.body.email})
    if(usr) {
        let result = await bcrypt.compare(req.body.password, usr.password)
        if(result){
            req.session.email = usr.email
            req.session.name = usr.name
            res.send({success:true,name:usr.name,email:usr.email,msg:"Authentication Successful!"})
        }
        else res.send({success:false,msg:"Enter Correct Credentials!"})
    }
    else res.send({success:false,msg:"Enter Correct Credentials!"})
});

router.post('/user/signUp',async(req,res)=>{
    
    let usr = await getUser({email:req.body.email})
    
    if(usr){
        res.send({success:false,msg:"Email Already Exists!"})
        return;
    }

    if(req.body.email.length<10 || req.body.name.length<3 || req.body.password<4) {
        res.send({success:false,msg:"Enter Valid Information!"})
        return
    }

    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(req.body.password,salt)
    
    
    if(addUser({name:req.body.name,email:req.body.email,password:hash})){
        res.send({success:true,msg:"User Successfully Registered."})
    }   
    else res.send({success:false,msg:"Some Error Occured!"})
});


module.exports.userRouter = router