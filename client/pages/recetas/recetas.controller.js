import { recipe } from "../../components/recipe.js"
import { newRec, getRec } from "./api/recipe.api.js"


const btnAdd = document.getElementById("add")
const btnCancel = document.getElementById("cancel")
const btnCreate = document.getElementById('create')

const arrIng = []

btnCreate.addEventListener('click', async () => {
    const name = document.getElementById("name").value

    const newRecipe = {
        title: name,
        ingredients: arrIng
    }

    try {
        const res = await newRec(newRecipe)
        if (res.ok) {
            console.log('Receta agregada con éxito!')
            arrIng.splice(0, arrIng.length)
            document.getElementById('list').innerHTML = ''
        } else {
            console.log('Error al agregar la receta')
        }
    } catch (error) {
        console.error('Error al agregar la receta:', error)
    }
})

btnAdd.addEventListener('click',()=>{
    const quantity = document.getElementById("quantity").value
    const ing = document.getElementById("ing").value
    const li = document.createElement('li')


    arrIng.push({quantity, ing})
    li.textContent = `${ing}: ${quantity}`
    document.getElementById('list').appendChild(li)
})


btnCancel.addEventListener('click',()=>{
    arrIng.splice(0,arrIng.length)
    document.getElementById('list').innerHTML = ''
})

/*window.addEventListener('load', function() {
    /*Llenar lista con las recetas existentes
        Se debe usar el componente recipe que recibe dos parametros, title y un array con los ingredientes de la receta llamado ing
    

    document.getElementById('listRecipe').innerHTML = recipe("Pizza", [{name:"Queso", quantity:120}, {name:"Salsa", quantity:150}])
})*/

window.addEventListener('load', async() => {
    try {
        const recs = await getRec()
        const listRecipe = document.getElementById('listRecipe');
        listRecipe.innerHTML = ''

        recs.forEach(rec => {
            listRecipe.innerHTML += recipe(rec.title, rec.ingredients)
        })
    } catch (error) {
        console.error('Error al cargar la lista de recetas:', error)
    }
})