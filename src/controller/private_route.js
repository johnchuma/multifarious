import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../utils/auth_provider'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { primaryColor } from '../utils/company_colors'
import { auth } from './firebase'
import { findUser } from './auth_controller'

const PrivateRoute = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe= auth.onAuthStateChanged((user)=>{
            if(user){
                // console.log(user)
                findUser(user).then((response)=>{
                    setUser(response)
                    setIsLoading(false)  

                })

            }
            else{
                setUser(null)
                setIsLoading(false)  

            }        
        })
       return unsubscribe
      }, []);
   console.log(user)
    return isLoading?<div className='d-flex justify-content-center align-items-center'
     style={{height:"100vh",width:"100%"}}>
        <Spinner size='80' color={primaryColor}/></div>
        :user? user.accountActivated === true? children:<Navigate to="/payment" replace />: <Navigate to="/login" replace />
}

export default PrivateRoute
