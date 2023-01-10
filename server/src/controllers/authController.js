const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const signin = (req, res) => {
    //receber o emil e senha

    try {

        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            //consultar no bnco de dados se o usuario existe
            if (!user) {
                return res.status(401).send({
                    message: "User não encontrado",
                    email: `${req.body.email}`
                })
            }

            //conferir se a senha enviaa é a mesma que está armazenada no banco de dados
            const validPassword = bcrypt.compareSync(req.body.password, user.password);

            if (!validPassword) {
                return res.status(401).send({
                    message: "LOGIN não autorizado",
                })
            }

            //gero um token e envio a resposta da minha requisiçao
            const token = jwt.sign({ name: user.name }, SECRET)

            if (token) {
                return res.status(200).send({
                    message: "Login autorizado",
                    token
                })
            }
        })

    } catch (e) {
        console.error(e)
    }


}

module.exports = {
    signin
}