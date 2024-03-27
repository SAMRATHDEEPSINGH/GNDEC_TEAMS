import {useState,useEffect} from 'react'


function Loader() {
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },8000)
    },[])
}
export default Loader
