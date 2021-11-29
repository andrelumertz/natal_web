const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})


//habilitar arquivos statics
app.use(express.static("assets"))

// nova pagina 
app.get('/about', function (req, res) {
    res.render('about');
})

app.listen(8080);
console.log('rodando');