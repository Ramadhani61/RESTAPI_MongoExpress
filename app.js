const express = require('express');
const cors = require('cors');

const app= express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8000;

app.listen(PORT ,()=> {
    console.log(`SERVER IS RUNNING IS PORT ${PORT}`);
})