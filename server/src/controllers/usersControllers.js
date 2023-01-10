const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const createUser = async(req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    try {
        //Saber se o usuario já existe
        const userExists = UserSchema.findOne({ email: req.body.email})
        if(userExists) {
            res.status(403).json({
                message: "Usuario já cadastrado"
            })
        }

        const newUser = new UserSchema(req.body);

        const savedUser = await newUser.save();
        if(!savedUser){
            res.status(403).json({
                message: "Erro ao salvar usuario"
            })
        }

        res.status(201).json({
            message: "User adicionado com sucesso!",
            savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    };
    
}

module.exports = {
    createUser,
}