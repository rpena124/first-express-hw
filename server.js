//require modules
const express = require('express');
const fs = require('fs') // this engine requires the fs module like we did Saturday
const eightBallArray = require('./models/eightBall') //importing array

//create the express app
const app = express();
//============= Configure the app using (app.set) ========

/* Start config */
// app.engine('evelyn', (filePath, options, callback) => { // define the view engine called evelyn
//     fs.readFile(filePath, (err, content) => {
//       if (err) return callback(err)
//       // this is an extremely simple view engine we'll be more complex later
//       const rendered = content.toString()
//         .replace('#title#', `<title>${options.title}</title>`)
//         .replace('#message#', `<h1>${options.message}</h1>`)
//         //.replace('#content#', `<div>${Array.isArray(options.content) ? options.content.map(item => `<li>${item}</li>`).join('') : options.content}</div>`)
//       return callback(null, rendered)
//     })
//   })
//   app.set('views', './views') // specify the views directory, it will atuomatically do this
//   app.set('view engine', 'evelyn') // register the evelyn view engine

  /* End config */
  
//=============== Routes ===============

//Greeting
app.get('/greeting', (req , res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req,res)=>{
    const input = req.params.name;
    res.send(`Wow! Hello there, ${input}`)
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage',(req,res)=>{
    const ans = parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100)
    res.send(`${ans}`)
})

//Magic 8 Ball
app.get('/magic/:input', (req, res)=>{
    const userQuestion = req.params.input
    const EightBallResponse = eightBallArray[Math.floor(Math.random()*21)]
    res.send(`
        <h1>${userQuestion}</h1>
        <h1>${EightBallResponse}</h1>
        `)
})

//Tell the app where to listen to the port
app.listen(3000, ()=>{
    console.log('listening to port 3000')
})