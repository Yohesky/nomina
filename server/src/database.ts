import mongoose from "mongoose"

// const uri:string = MONGODB_URI.toString()


mongoose.connect('mongodb+srv://yohesky:yohesky@cluster0-e3kcs.mongodb.net/test?retryWrites=true&w=majority',{
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex: true
})
.then(db => console.log("conectado a la bd"))
.catch(err => console.log(err))