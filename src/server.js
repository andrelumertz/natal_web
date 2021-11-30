const express = require("express")  // pegando o express e colocando em uma constante
const server = express()


//habilitar arquivos statics (public)
server.use(express.static("public"))



// request (pedido), response (resposta)
server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})


server.listen(3000);
console.log('rodando');