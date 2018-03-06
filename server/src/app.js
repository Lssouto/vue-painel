const express = require('express')
const app = express()

//Add ons
    //Converte a requisição para JSON
    const bodyParser = require('body-parser')
    
    //Controle de acesso
    //const cors = require('cors')
    
    //Mostra os log de quem acessou, de onde e quando
    const morgan = require('morgan')
    
    //Caminho normal do site
    const path = require('path')
    
    //Config manual
    const config = require('./config')

app.use(morgan('combined'))
//app.use(cors())
app.use(bodyParser.json())

require('./router')(app)

//Caminho statico pra imagens e arquivos 
app.use(express.static(path.join(__dirname, '../../public' )));

app.listen(process.env.PORT || config.data.port)

if(process.env.PORT)
    console.log("\nServidor Rodando -> https://localhost:" + process.env.PORT + "\n")
    else
        console.log("\nServidor Rodando -> https://localhost:" + config.data.port + "\n")