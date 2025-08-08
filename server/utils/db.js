const mongoose=require('mongoose')

const dbConnect=()=>{
    try {
        mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("DB Connected")
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports=dbConnect