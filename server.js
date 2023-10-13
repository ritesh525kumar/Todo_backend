const express = require('express');
const app = express()
const port = 2000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// /api
app.use('/api', require('./Apis/index'))


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})