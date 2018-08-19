const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect('mongodb+srv://Miteshdv:Mityahoo84@cluster0-dzbcl.mongodb.net/TestDB?retryWrites=true',(err,client)=>{
    if(err){
        console.log('Error to connect',err)
        return
    }

    console.log('Successfully connected')
    const db = client.db('TestDB')
    db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b77b586e3aa0c35056c66d1')},{
        $set:{
            completed:true
        }
    },{returnOriginal:false}).then((result)=>{
        console.log(result)
    },(err)=>{
        console.error('Error to find',err)
    })
   
    client.close()
})