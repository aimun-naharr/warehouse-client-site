import { useEffect, useState } from "react"
import AddSpinner from "./AddSpinner/AddSpinner"


const useProduct=()=>{
    const [products, setProducts]=useState([])
    const url='https://obscure-spire-96407.herokuapp.com/products'
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