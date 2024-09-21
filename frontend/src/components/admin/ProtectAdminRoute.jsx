import {useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectAdminRoute({children}) {
    const {user} = useSelector(store=>store.auth)

    const navigate = useNavigate()

    useEffect(()=>{
        if(user === null || user.role !== 'admin'){
            navigate("/")
        }
    },[])
  return (
   <>
   {children}
   </>
  )
}

export default ProtectAdminRoute