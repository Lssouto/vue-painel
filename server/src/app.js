import express from 'express'
const app = express()

//Add ons
    //Converte a requisição para JSON
    import bodyParser from 'body-parser'
    
    //Controle de acesso
    //import cors from 'cors'
    
    //Mostra os log de quem acessou, de onde e quando
    import morgan from 'morgan'
    
    //Caminho normal do site
    import path from 'path'
    
    //Config manual
    import config from './config'

app.use(morgan('combined'))
//app.use(cors())
app.use(bodyParser.json())

require('./router')(app)

//Caminho statico pra imagens e arquivos 
app.use(express.static(path.join(__dirname, '../../public' )));

app.listen(config.data.port)

// if(process.env.PORT)
//     console.log("\nServidor Rodando -> https://localhost:" + process.env.PORT + "\n")
//     else
        console.log("\nServidor Rodando -> https://localhost:" + config.data.port + "\n")