const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp2',{useNewUrlParser:true},(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db("Todoapp2")

    // db.collection('Todos').findOneAndUpdate(
    //     {text: "Eat dinner"},
    //     {$set: {completed: true}},
    //     {returnOriginal: false})
    //     .then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate(
        {_id: ObjectId("5c44c18177d3b580f2de1ff2")},
        {
            $set: {
                name: "Juan"
            },
            $inc:{
                age: 2
            }
        },
        {
            returnOriginal:false
        }
    ).then((result) => {
        console.log(result)
    })

    //client.close()
})