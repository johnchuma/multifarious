import React, { useContext } from 'react'

import LayoutPage from './layout_page'
import RegisterPage from './register_page'
import { AuthContext } from '../utils/auth_provider'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { primaryColor } from '../utils/company_colors'

const DecisionPage = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    if(user){
        if(user.accountActivated){
            navigate("/home")
        }
        
    }
    else{
       navigate("/register")
    }
    return <div className='d-flex justify-content-center align-items-center' style={{width:"100%",height:"100vh"}}>
           <Spinner color={primaryColor}/>
    </div>
}

export default DecisionPage