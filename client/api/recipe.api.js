import { API } from "./api.js"

export const newRec = async(newRec)=>{
    try{
        const res = fetch(`${API}/receta/addRecipes/`,{
            method:"POST",
            body: JSON.stringify(newRec),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        return res
    }catch(error){
        console.log(error)
    }
}

export const getRec = async()=>{
    try{
            const response = await fetch(`${API}/receta/all/`,{
            method:"GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const res = await response.json()
        return res
    }catch(error){
        console.log(error)
    }
}