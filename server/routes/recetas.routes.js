import { Router } from "express"
import {readFile, writeFile} from 'fs/promises'
//import { get_higherId } from '../utils/addId.js'

/*Rutas de Productos*/
const fileRecipe = await readFile('data/recetas.json', 'utf8')
const recipeData = JSON.parse(fileRecipe)
const router = Router()

/*Obtener info completa de recetas*/
router.get('/all', (req, res) => {
    try{
        if(recipeData.length){
            res.status(200).json(recipeData)
        }else{
            res.status(400).json({})
        }
    }catch(error){
        res.status(590).json(error)
    }
})

/*Prueba personal para encontrar el id mas alto
router.get('/prueba', (req, res) => {
    const id = get_higherId(recipeData)
    try{
        
        if(id){
        console.log(id)
        res.status(200).json(id)
        }
    }catch(error){
        res.status(590).json(error)
    }
})*/

/*Agregar Recetas*/
router.post('/addRecipes', (req,res)=>{
    const recetas = req.body
    recetas.id = recipeData[recipeData.length - 1].id + 1

    try{
        recipeData.push(recetas)
        writeFile('./data/recetas.json', JSON.stringify(recipeData,null,2))
        res.status(200).json('Receta Agregada! ;)')

    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
})

export default router