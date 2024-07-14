/* -------------------------------Configuration de l'application----------------------------- */

const express = require('express')
const mainApp = express()
mainApp.set("view engine", "ejs")
mainApp.set("views", __dirname + "/views")
mainApp.use(express.static(__dirname + "/public"))
mainApp.use(express.json())

/* -------------------------------Rootage----------------------------- */

mainApp.get('/', (req, res)=>{
    res.render('index')
})
mainApp.get('/signUp', (req, res)=>{
    res.render('signUp')
})
mainApp.get('/LogIn', (req, res)=>{
    res.render('LogIn')
})
mainApp.get('/*', (req, res)=>{
    res.render('404')
})


/* -------------------------------Configuration du serveur----------------------------- */
const port = 3000

mainApp.listen(port, function(){
    console.log(`the App runs on http://localhost:${port}`)
})