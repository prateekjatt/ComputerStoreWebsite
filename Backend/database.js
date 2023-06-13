const {MongoClient} = require('mongodb')


const client = new MongoClient("mongodb://127.0.0.1:27017");

let users;
let products;
let wishlists;

exports.connectDB = async()=>{
    await client.connect()
    .then(res=> client.db('computerstore').command({ping:1}))
    .then((res)=>{
        console.log("MongoDB Connected!");
        let db = client.db('computerstore');
        users = db.collection('users');
        products = db.collection('products')
        wishlists = db.collection('wishlists')
    })
    .catch(e => console.log('Unable to connect to MongoDB!'))
}

function isConnected(){
    return (db==null? false:true);
}

exports.getTrends = async()=>{

    let res = await products.distinct("category")
    let trends = []
    for await(const cat of res){
        trends.push(await products.findOne({category:cat}))
    }
    return trends
}


exports.getUser = async(filter)=>{
    let res = await users.findOne(filter)
    return res
}


exports.addUser = async(user)=>{
    user = {name:user.name,email:user.email,password:user.password}
    let res = await users.insertOne(user)
    let res1 = await wishlists.insertOne({email:user.email,items:[]})
    if(res && res1){
        console.log(`New User Added: ${res.insertedId}`)
        return true
    }
    return false
}

exports.addItem = async(user,itemId)=>{
    let res = await wishlists.updateOne({email:user.email},{$push:{items:itemId}})
    if(res){
        console.log(`${itemId} Added to wishlist of ${user.email}`)
        return true
    }
    return false
}

exports.removeItem = async(user,itemId)=>{
    let res = await wishlists.updateOne({email:user.email},{$pull:{items:itemId}})
    if(res){
        console.log(`${itemId} Removed from wishlist of ${user.email}`)
        return true
    }
    return false
}

exports.getWishlist = async(user)=>{
    let res = await wishlists.findOne({email:user.email})
    
    console.log(`Wishlist of ${user.email}`)
    return res
}