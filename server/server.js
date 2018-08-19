const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')
const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

var app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    var newTodo = new Todo({
        text:req.body.text,
        complete:true
    })
    
    newTodo.save().then((doc)=>{
     res.send(doc)
    },(e)=>{
        res.status(400).send(e)
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

app.get('/todos/:id',(req,res)=>{
var id = req.params.id
if(!ObjectId.isValid(id)) {
    res.status(404).send()
    return
}

Todo.findById(id).then((todo) => {
       if (!todo) {
        return res.status(404).send ()  
     }
     res.send({todo})
    }).catch((e) => res.status(400).send()   );

})

app.delete('/todos/:id',(req,res)=>{

    var id = req.params.id
    if(!ObjectId.isValid(id)) {
        res.status(404).send()
        return
    }

    Todo.findByIdAndRemove({
        _id:id
    }).then(todo=>{
        if (!todo) {
            return res.status(404).send ()  
         }
         res.send({todo})

    }).catch((e) => res.status(400).send()   );
})

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id
    var body = _.pick(req.body,['text','completed'])
    if(!ObjectId.isValid(id)) {
        res.status(404).send()
        return
    }

    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(id,{
        $set:body},{new:false}).then((todo)=>{

            if (!todo) {
                return res.status(404).send()  
             }
             res.send({todo})
            
        },(err)=>{
            res.status(400).send(err)  
        })
    })


app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})



