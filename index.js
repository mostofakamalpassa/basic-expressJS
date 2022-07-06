
// common js  old way node js file required 
 const express =require('express');

 const app = express();


// send html to browser 

    // route  like url localhost:5000/admin or /contact or /about or /others

    app.get('/', (request, response)=>{

        // we can sen any type of data by using response   like html , json, image, sql, xml, yml, pdf, word file etc
        response.send("hello kamal");
    })




 app.listen(5000,()=>{
    console.log('server is running')
 })

// // esm for file import 
// import express from 'express';