const path = require('path');
const express = require('express');
const app = express();
const port = 80;

app.get('/',(req,res)=>{
    res.redirect('/index.html');
});

app.get('/trending',(req,res)=>{
    let obj = [{
        image:"/res/images/Kingston_Fury_Beast_32GB.jpg",
        itemname:"Kingston Fury Beast 32GB (2x16GB) 5200MHz DDR5 CL40 Kit of 2 Desktop Memory KF552C40BBK2-32, Black",
        price:"16033"        
    },
    {
        image:"/res/images/aorus_pro.jpg",
        itemname:"GIGABYTE X570 AORUS PRO MOTHERBOARD",
        price:"22500"        

    },
    {
        image:"/res/images/asus_tuf_f12.jpg",
        itemname:"ASUS TUF GAMING F17 FX766HC-HX060T GAMING LAPTOP",
        price:"80500"        

    },
    {
        image:"/res/images/geforce-rtx-3050.jpg",
        itemname:"MSI GEFORCE RTX 3050 VENTUS 2X 8G OC GDDR6",
        price:"33900"        

    },
    {
        image:"/res/images/msi-optix.jpg",
        itemname:"MSI OPTIX MAG342CQR 34 INCH MONITOR",
        price:"45850"        

    },
    {
        image:"/res/images/amd-ryzen-5600X.jpg",
        itemname:"AMD RYZEN 5 5600X PROCESSOR (UPTO 4.6GHZ 35MB CACHE)",
        price:"19250"        

    },
    {
        image:"/res/images/intel-i9.jpg",
        itemname:"INTEL CORE I9-12900KS PROCESSOR (30M CACHE, UP TO 5.50 GHZ)",
        price:"67000"        

    },
    {
        image:"/res/images/logitech-g502.jpg",
        itemname:"LOGITECH G502 HERO HIGH PERFORMANCE GAMING MOUSE",
        price:"3700"        

    }];
    res.send(obj);
});

app.use(express.static(path.join(__dirname,'../Frontend/public')));

app.listen(port,'192.168.43.168',()=>{
    console.log(`Server listening on port ${port}`);
});
