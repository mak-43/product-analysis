import { useEffect, useState } from "react"

const useCart=()=>{

    const [carts,setCarts]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('public.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
        setLoading(false)
    },[])
    return [carts,setCarts]
}
export default useCart