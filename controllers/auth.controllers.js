function register(req, res) {
    console.log("Se ha ejecutado el registro")

    res.status(200).send({msg:"Funciono perfecto !"})
}

module.exports = {
    register,
}