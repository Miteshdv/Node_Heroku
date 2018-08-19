const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect('mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/TestDB?retryWrites=true',(err,client)=>{
    if(err){
        console.log('Error to connect',err)
        return
    }

    console.log('Successfully connected')
    const db = client.db('TestDB')
    db.collection('Todos').findOneAndDelete({_id:new ObjectID('5b77ab6c7bd7a52ac64a2c26')}).then((result)=>{
        console.log(result)
    },(err)=>{
        console.error('Error to find',err)
    })
   
    client.close()
})