import { defaultMaxListeners } from "events"
import { Router } from "express"
import {readFile, writeFile} from 'fs/promises'
//import { get_higherId } from '../utils/addId.js'

/*Rutas de Productos*/
const fileIng = await readFile('data/ingredientes.json', 'utf8')
const ingData = JSON.parse(fileIng)
const router = Router()

/*Obtener info completa de igredientes*/
router.get('/all', (req, res) => {
    try{
        if(ingData.length){
            res.status(200).json(ingData)
        }else{
            res.status(404).json({})
        }
    }catch(error){
        res.status(590).json(error)
    }
})

/*Agregar Ingrediente*/
router.post('/addIngredients', (req,res)=>{
    const ingredientes = req.body
    ingredientes.id = ingData[ingData.length - 1].id + 1

    try{
        ingData.push(ingredientes)
        writeFile('./data/ingredientes.json', JSON.stringify(ingData,null,2))
        res.status(200).json('Ingrediente Agregado! ;)')

    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
})

export default router