import { useEffect, useState } from "react"
import AddSpinner from "./AddSpinner/AddSpinner"


const useProduct=()=>{
    const [products, setProducts]=useState([])
    const url='http://localhost:5000/products'
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           
            setProducts(data)
        })
    },[])
    return [products , setProducts]
}
export default useProduct