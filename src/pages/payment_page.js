import React, { useEffect, useRef } from 'react'
import Heading from '../widgets/heading'
import Paragraph from '../widgets/paragraph'
import { Button, Col, Container, Row, Spinner, Stack } from 'react-bootstrap'
import { primaryColor } from '../utils/company_colors'
import SelcomPayment from './selcom_payment'
import Lottie from 'lottie-web'

const PaymentPage = () => {
    const animationController = useRef(null)
    useEffect(() => {
        Lottie.destroy()
        Lottie.loadAnimation({
            container:animationController.current,
            autoplay:true,
            path:'payment-successful.json',
            renderer:'svg',
            loop:true
        })},[])
    return (
        <Container fluid>
 <div className='d-flex justify-content-center text-center ' style={{height:"100vh",width:"100%"}}>
             <Stack>
             <div style={{height:"60vh"}} ref={animationController}></div>
             <Heading text={`Activate account`}/>
             <Row>
                <Col md={{offset:4,span:4}}>
                <Paragraph className={`mb-4`} text={`To continue using our services you will have to activate your account by paying 1000TZS `}/>
             <SelcomPayment/>
                </Col>
             </Row>
            
             </Stack>
           
            
             
             
             </div>
        </Container>
       
          
      
        
    )
}

export default PaymentPage
