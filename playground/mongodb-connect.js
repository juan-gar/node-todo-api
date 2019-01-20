const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp2',{useNewUrlParser:true},(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db("Todoapp2")

    // db.collection('Todos').insertOne({
    //     text: "Buy kefir",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo')
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: "Juan",
        age: 32,
        location: "Barcelona"
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo')
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close()
})