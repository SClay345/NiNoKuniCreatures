const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const creature = {
    'mite' : {
        'Name': 'a',
        'FavoriteFoods' : 'a',
        'Metamorph':'a',
    },
    'unknown' : {
        'Name': 'unknown',
        'FavoriteFoods' : 'unknown',
        'Metamorph':'unknown',
    },
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:creatureName', (res, req)=>  {
    const name = req.params.creatureName.toLowerCase()
    if(creature[name]){
        res.json(creature[name])
    } else {
        res.json(creature[unknown])
    }
    
    
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})