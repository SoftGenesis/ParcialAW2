import { API } from "./api.js"

export const newIng = async(newIng)=>{
    try{
        const res = fetch(`${API}/ingrediente/addIngredients/`,{
            method:"POST",
            body: JSON.stringify(newIng),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        return res
    }catch(error){
        console.log(error)
    }
}

export const getIng = async()=>{
    try{
            const response = await fetch(`${API}/ingrediente/all/`,{
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