//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy,pageGiveClasses, saveClasses} = require('./pages')

//Configurar nunjucks
const nunjucks = require('nunjucks') // template Engine "{{}}""
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) //Configurando/Tornando as páginas estáticas de css, img, scripts etc acessíveis.

//Rotas de acesso da aplicação!
.get("/", pageLanding) //req => requisição, res => resposta | "/" ROTA)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500) //Start do servidor


//Abrir a porta 5500, rodar no terminal o comando "node src/server.js"
//Após isso é possível abrir no navegador o endereço http://127.0.0.1:5500/

//Nodemon, para iniciar basta rodar "npm run dev(lá do package.json)"