const mongoose = require("mongoose")

const mongooseDB = () => {
    mongoose.connect("mongodb+srv://yashbaraiya143259:qKHLXK2mhrpj4IPI@cluster0.d7jj5oe.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database connected successfully ^-^")
        }
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = mongooseDB