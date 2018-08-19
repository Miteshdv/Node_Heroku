const express = require('express')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

var app = express()
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    var newTodo = new Todo({
        text:req.body.text,
        complete:true
    })
    
    newTodo.save().then((doc)=>{
     res.send(doc)
    },(e)=>{
        res.status(400).send(doc)
    });
})

app.get('/todos',(req,res)=>{ 
    Todo.find().then((todos)=>{
        res.send({
            todos
        })
    },(e)=>{
        res.status(400).send(doc)
    })
})

app.listen(3000,()=>{
    console.log('Started on port 3000')
})

/*

var user = new User({
    email:'Miteshdv@yahoo.co.in'
})


user.save().then((doc)=>{
    console.log('Saved successfully',doc)
   },(e)=>{
       console.log('Unable to save',e)
   })*/


