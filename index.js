
// common js  old way node js file required 
 const express =require('express');
 const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
 const app = express();


 app.use(morgan());

 app.use(cors());
 app.use(express.json());

 app.use(globalMiddleware);
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
    });

    function globalMiddleware(req, res, next){

        console.log("i am global middleware")
        
        next();
    }


    // middleware 
    function middlewareSignature(req, res, next){


        next();
    }
/* 

    
Responsibilities of a middleware 
    Handle common task
    request logs
    Filter request
    Modify or reshape request
    Validate request body
    Authenticate or authorize request
    Add additional details to request body
    Response bad requests
    Pass requests to next middleware to response handler

*/

/* 
     if every things seems  controller will call response methods

    if every things seems ok middleware call next methods
*/



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