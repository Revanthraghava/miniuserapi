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


app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user=users.find(user=> user.id === id) 

    if (!user){
    return res.status(404).json({
            message:"user not found"

    })
    }
    else{
        res.status(200).json({
        message:"user fetched successfully",
        data:user
        })
    }
    })
app.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user=users.find(user=>user.id === id)
    if (!user){

        return res.status(404).json({
            message:"user not found"
        })
    }

    else{
        user.name = req.body.name
        user.age = Number(req.body.age)
        res.status(200).json({
            message:"user updated successfully",
            data:user
        })
    }
})


    app.listen(3000,()=>{ 
        console.log("server is running") 
    })
