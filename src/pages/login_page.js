import React, { useContext, useEffect, useRef, useState } from 'react'
import { Col, Container, Form, Image, Nav, Row, Stack, Toast, ToastContainer } from 'react-bootstrap'
import { backgroundColor, primaryColor, secondaryColor } from '../utils/company_colors'
import Lottie from 'lottie-web';
import Heading from '../widgets/heading';
import Heading3 from '../widgets/heading3';
import Paragraph from '../widgets/paragraph';
import { AiFillWarning, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { eastAfricanCountries } from '../utils/arrays';
import Toastr from '../utils/toast';
import { registerUser, signIn } from '../controller/auth_controller';
import { AuthContext } from '../utils/auth_provider';
import Space from '../widgets/space';

const LoginPage = () => {
    const animationController = useRef(null);
    const {user} = useContext(AuthContext)
    useEffect(() => {
        Lottie.destroy()
        Lottie.loadAnimation({
            container:animationController.current,
            autoplay:true,
            path:'affiliate-marketing.json',
            renderer:'svg',
            loop:true
        })})
        const navigate = useNavigate()
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

      const submitData = async()=>{
        
            const data = {email,password}
          await  signIn(data).then((response)=>{
            if(response){
                navigate('/')
            }
            else{
                setShowToast(true)
            }
          })

      }
    const [showToast, setShowToast] = useState("");

    return (
        <Container fluid>
                  <Toastr text={`Wrong email/password, try again`} color={`red`} show={showToast} onClose={()=>setShowToast(false)}/>
            
      <Row style={{height:"100vh"}}>
            <Col className='d-flex justify-content-center align-items-center' md={7}>
                 <Container>
                  {/* <Toastr text={`Passwords doesn't match`} color={`red`} show={showToast} onClose={()=>setShowToast(false)}/> */}
                 {/* <Row>
                        <Col className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-center align-items-center rounded-circle'
                         style={{height:50,width:50,backgroundColor:"#FFF4D4"}}>
                    <AiOutlineUser color='#B58E20'/>
                </div>
                        </Col>
                    </Row> */}
                    <Heading  className={`text-center mt-2`} text={`Welcome! back`}/>
                    <Paragraph  className={`text-center mt-2 mb-5`} text={`Enter you credentials to continue`}/>

                    <Row>
                        <Col md={{offset:2,span:8}}>
                        <Form onSubmit={(e)=>{
                            e.preventDefault()
                             submitData()
                           }}>
                        <Form.Group>
                           
                            <Form.Control onChange={(e)=>setEmail(e.target.value)}  required style={{boxShadow:"0px 0px"}} className='mt-1 py-2 shadow-none' type='email' placeholder='Enter email address'/>
                            <Form.Control minLength={6}  onChange={(e)=>setPassword(e.target.value)} required style={{boxShadow:"0px 0px"}} className='mt-1 py-2 shadow-none' type='password' placeholder='Enter password'/>
                            <Form.Control type='submit' className='btn mt-3 text-white py-3' style={{backgroundColor:primaryColor}}/>
                       
                        </Form.Group>

                    </Form>
                    {/* <Space/> */}
                    <Stack className='mt-4 d-flex justify-content-center' direction='horizontal'>
                    <Paragraph text={`Don't have an account? `}/><Nav.Link className='ms-2' href='/register'><Paragraph fontWeight={700} color={primaryColor} text={`Register`}/></Nav.Link> 

                    </Stack>
                        </Col>

                    </Row>
                 </Container>
            </Col>
            <Col md={5} className='p-5 d-none d-md-block' style={{backgroundColor:primaryColor,height:"100vh"}}>
                <div  ref={animationController}/>
            </Col>
        </Row>
        </Container>
  
    )
}

export default LoginPage

