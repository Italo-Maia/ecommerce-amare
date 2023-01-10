//Instanciar o App com as funçoes do express
const express = require("express"); 
const app = express();

//Cors
const cors = require("cors");

//importar dotenv para auxiliar na leitura das variaveis do ambiente
require("dotenv-safe").config();

//Iniciar o banco
const db = require("./database/config");
db.connect();

app.use(cors());

//Auxilia ler o JSON do body das requisiçoes
app.use(express.json());

//import o arquivo de rotas
const userRoutes = require("./routes/userRoutes");

// configurar rota principal do meu projeto
app.use("/users", userRoutes);

module.exports = app;