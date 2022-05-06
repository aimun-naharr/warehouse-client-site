import { useEffect, useState } from "react"
import Spinner from "./spinner/Spinner"

const useProduct=()=>{
    const [products, setProducts]=useState([])
    const url='http://localhost:5000/products'
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            <Spinner></Spinner>
            setProducts(data)
        })
    },[])
    return [products , setProducts]
}
export default useProduct