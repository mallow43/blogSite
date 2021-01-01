var mongoose = require("mongoose")
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
        },
        username: String
    },
    comments:[
        
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Comment"
            }
        
    ]
})

var Blogs = mongoose.model("Blogs", blogSchema)
module.exports = Blogs