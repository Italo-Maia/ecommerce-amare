//Importando o App com as funcionalidades do express
const app = require('./src/app');

//Porta da variavel do .env
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log("Servidor rodando da porta " + PORT)
});

