const path = require('path');
const {MongoClient} = require('mongodb')
const express = require('express');
const app = express();
const port = 80;
const hostname = '192.168.43.168';
let db;

app.get('/',(req,res)=>{
    res.redirect('/index.html');
});

app.get('/trending',async(req,res)=>{
    
    let cursor = getTrending();
    let obj = [];
    await cursor.forEach(element => {
        obj.push(element);
    });
    res.send(obj);
});

app.use(express.static(path.join(__dirname,'../Frontend/public')));

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../Frontend/public/error.html'));
});

app.listen(port,hostname,()=>{
    console.log(`Server listening on ${hostname}:${port}`);
});



const client = new MongoClient("mongodb://127.0.0.1:27017");
async function connectDB(){
    try{
        await client.connect();
        await client.db('computerstore').command({ping:1});
        console.log("MongoDB Connected!");
        db = client.db('computerstore');
    }
    catch(e){
        console.log(e);
    }
}

connectDB();

function getTrending(){
    let coll = db.collection('trending');
    let cursor = coll.find();
    return cursor;
}
