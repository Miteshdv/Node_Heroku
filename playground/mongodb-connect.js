const {MongoClient,ObjectID} = require('mongodb').MongoClient
var obj = new ObjectID()

MongoClient.connect('mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/TestDB?retryWrites=true',(err,client)=>{
    if(err){
        console.log('Error to connect',err)
        return
    }

    console.log('Successfully connected')
    
    /*const db = client.db('TestDB')
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            console.log('Error to insert',err)
            return
        }

        console.log(JSON.stringify(result.ops,undefined,2))
    })*/
    client.close()
})