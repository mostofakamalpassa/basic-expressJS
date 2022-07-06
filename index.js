
// common js  old way node js file required 
 const express =require('express');
 const fs = require('fs');

 const app = express();


// send html to browser 

    // route  like url localhost:5000/admin or /contact or /about or /others

    app.get('/', (request, response)=>{

        // we can sen any type of data by using response   like html , json, image, sql, xml, yml, pdf, word file etc
        response.send("hello kamal");
        console.log(response)
    })

// Handle multiple routes 
    app.get('/about', async(req, res)=>{

        res.send(`<h1> I am about</h1>`)
    })

    app.get('/help', async(req, res)=>{

        res.send(`<h1> I am Healp</h1>`)
    })

    app.get('/others', async(req, res)=>{

        res.send(`<h1> I am others</h1>`)
    })

    app.get('/html', (req, res)=>{

        // html file send in  browser
        fs.readFile('pages/htmlFiels.html',(err, data)=>{
            if(err){
                console.log(err);

                res.send("somthig went wrong")

                return;
            }

            res.write(data);
            res.end();
        })
    })

 app.listen(5000,()=>{
    console.log('server is running')
 })

// // esm for file import 
// import express from 'express';



function handlerFunction(request, response, next){

    // read request object 
    // process request 

    // response request 
}