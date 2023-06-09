const express = require('express');
const cors = require('cors');

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require('./app/models')

db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("berhasil");
}).catch((err)=>{
    console.log("erorr coy",err);
    process.exit();
})

app.get('/',(req,res)=>{
    res.json({
        message:"hallo guys"
    })
})

require('./app/routes/post.routes')(app)

const PORT = 8000;

app.listen(PORT ,()=> {
    console.log(`SERVER IS RUNNING IS PORT ${PORT}`);
    
})