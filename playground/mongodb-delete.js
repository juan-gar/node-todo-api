const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp2',{useNewUrlParser:true},(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db("Todoapp2")

    // //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat dinner"}).then((result) => {
    //     console.log(result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat dinner"}).then((result) => {
    //     console.log(result)
    // })


    //findOneandDelete
    // db.collection('Todos').findOneAndDelete({text: "Eat dinner"}).then((result) => {
    //     console.log(`Todo ${result.value.text} was deleted successfully`)
    // })

    //Exercise

    // db.collection('Users').deleteMany({location: "Barcelona"}).then((result) => {
    //     console.log(result)
    // })


    db.collection('Users').findOneAndDelete({"_id" : ObjectId("5c44c1c377d3b580f2de200b")}).then((result) => {
        console.log(`User${result.value.name} was deleted successfully`)
    })
        
        
    //client.close()
})