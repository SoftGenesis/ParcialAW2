import express from "express"

import recipeRouter from './routes/recetas.routes.js'
import ingredientsRouter from './routes/ingredientes.routes.js'


const app = express()

const port = 3007

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor escuchando en ${port}`)
})

app.use(cors({
    origin:'http://127.0.0.1:5501'
}))

app.use('/receta', recipeRouter)
app.use('/ingrediente', ingredientsRouter)