const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(cors());

app.get('/', (req,res)=>{
    const data = {message:'Hi from server'};
    res.json(data);
});

app.listen(PORT,HOST,()=>{
    console.log(`Server listening on http://${HOST}:${PORT}`);
});

