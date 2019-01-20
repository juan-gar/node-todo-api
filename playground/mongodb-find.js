const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp2',{useNewUrlParser:true},(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db("Todoapp2")

    // db.collection("Todos").find({
    //     _id: new ObjectId("5c3cf17677d3b580f2de0236")
    // }).toArray().then((docs) => {
    //     console.log(docs)
    // }, (err) => {
    //     console.log('Unable to fetch Todos')
    // })

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch Todos')
    // })

    db.collection("Users").find({name: 'Juan'}).toArray().then((docs) => {
        console.log(docs)
    }, (err) => {
        console.log('Unable to fetch Todos')
    })

    client.close()
})