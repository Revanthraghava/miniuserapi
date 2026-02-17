const express = require('express');
const app = express();
app.use(express.json());
const users = [];
let nextUserId = 1;

app.get('/',(req,res)=>{

    res.send("API running!")
})


app.post('/users',(req,res)=>{
    const incomingData = req.body;
    const newUser ={
        id:nextUserId,
        
        name:incomingData.name,

        age:incomingData.age



    }

    users.push(newUser)
    nextUserId++;

res.status(201).json({ 
    message: 'User created successfully', data:newUser }) 

}) 



app.get('/users',(req,res)=>{

    res.status(200).json({

        message:"users fetched successfully",
        data:users
    })
})



    app.listen(3000,()=>{ 
        console.log("server is running") 
    })