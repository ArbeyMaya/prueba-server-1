const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { API_VERSION} = require("./constans")

const app = express()

// importar rutas
const authRoutes = require("./router/auth.router")

// configurar Body Parse
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


// Configurar carpeta static
app.use(express.static("uploads"))

// Configurar Header HTTP -CORS
app.use(cors())

// Configurar Rutas
app.use(`/api/${API_VERSION}`, authRoutes)
module.exports = app