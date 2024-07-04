import { newIng, getIng } from "./api/ing.api.js"

const btnCreate = document.getElementById("create")

btnCreate.addEventListener('click', async(e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const res = await newIng(name)
    console.log('Nombre del ingrediente:', name);
    if(res){
        console.log('Ingrediente agregado con exito!!')
    }else{
        console.log('Error al agregar ingrediente')
    }
})

window.addEventListener('load', async() => {
    /*Llenar lista con los ingredientes existentes*/
    try{
        const ing = await getIng()
        console.log('Ingredientes obtenidos:', ing);
        const ul = document.getElementById('list')

        ing.forEach(e => {
            const li = document.createElement('li')
            li.textContent = e.nombre
            ul.appendChild(li)
        })
    } catch (error) {
        console.error('Error al cargar la lista de ingredientes:', error)
    }
})