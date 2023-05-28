import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, Nav, Row, Spinner, Stack, Toast, ToastContainer } from 'react-bootstrap'
import { backgroundColor, primaryColor } from '../utils/company_colors'
import Lottie from 'lottie-web';
import Heading from '../widgets/heading';
import Heading3 from '../widgets/heading3';
import Paragraph from '../widgets/paragraph';
import { AiFillWarning, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { eastAfricanCountries } from '../utils/arrays';
import Toastr from '../utils/toast';
import { findUserByReferral, registerUser } from '../controller/auth_controller';
import { AuthContext } from '../utils/auth_provider';

const RegisterPage = () => {
    const animationController = useRef(null);
    const {user} = useContext(AuthContext)
    const { referral } = useParams();
    const [invitedBy, setInvitedBy] = useState(null);
    useEffect(() => {
        console.log(referral)
        findUserByReferral(referral).then((response)=>{
            setInvitedBy(response)
        })
        Lottie.destroy()
        Lottie.loadAnimation({
            container:animationController.current,
            autoplay:true,
            path:'affiliate-marketing.json',
            renderer:'svg',
            loop:true
        })},[])
        const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [showFailedToast, setShowFailedToast] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState(eastAfricanCountries[0].currency);
    const [password2, setPassword2] = useState("");

      const submitData = ()=>{
        setUploading(true)
        if(password === password2){
            const data = {username,phone,email,password,country,refferalCode:"",invitedBy:invitedBy&&invitedBy.email};
            registerUser(data).then((response)=>{
                if(response){
                    navigate('/')
                    setUploading(false)
                }
                else{
                  setShowFailedToast(true)
                  setUploading(false)

                }
            })
        }
      else{
        setShowToast(true)
      }
}
    return (
        <Container fluid>
            
      <Row style={{height:"100vh"}}>
            <Col className='d-flex justify-content-center align-items-center' md={7}>
                 <Container>
                 <Toastr text={`Passwords doesn't match`} color={`red`} show={showToast} onClose={()=>setShowToast(false)}/>
                  <Toastr text={`This is email is already taken`} color={`red`} show={showFailedToast} onClose={()=>setShowFailedToast(false)}/>
                 {/* <Row>
                        <Col className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-center align-items-center rounded-circle'
                         style={{height:50,width:50,backgroundColor:"#FFF4D4"}}>
                    <AiOutlineUser color='#B58E20'/>
                </div>
                        </Col>
                    </Row> */}
                    <Heading  className={`text-center mt-2`} text={`Hi! welcome`}/>
                    <Paragraph  className={`text-center mt-2 mb-5`} text={`Fill the form below to register`}/>
                     
                    <Row>
                        <Col md={{offset:2,span:8}}>
                     {invitedBy&&  <Alert  variant='info' >
                        <Alert.Heading className='p-0 m-0'  ><Paragraph text={`You have been invited by ${invitedBy.username}`}/></Alert.Heading>
                     </Alert>}
                     
                        <Form onSubmit={(e)=>{
                            e.preventDefault()
                             submitData()
                           }}>
                        <Form.Group>
                           
                            <Row >
                            <Col  md={6}>
                                <Form.Control onChange={(e)=>setUsername(e.target.value)} required style={{boxShadow:"0px 0px"}}  className='mb-1 py-2 shadow-none' type='text' placeholder='Enter username'/>

                                </Col>
                                <Col  md={6}>
                                <Form.Select onChange={(e)=>setCountry(e.target.value)} required style={{boxShadow:"0px 0px"}} className='mb-1 py-2 shadow-none'>
                                {eastAfricanCountries.map((item)=><option value={item.currency}>{item.name}</option>)}
                            </Form.Select>
                                </Col>
                               
                            </Row>
                            <Row >
                               
                                <Col md={6} >
                                <Form.Control onChange={(e)=>setPhone(e.target.value)} required style={{boxShadow:"0px 0px"}}  className='mb-1 py-2 shadow-none' type='text' placeholder='Enter phone number'/>

                                </Col>
                                <Col md={6} >
                                <Form.Control onChange={(e)=>setEmail(e.target.value)}  required style={{boxShadow:"0px 0px"}} className='mb-1 py-2 shadow-none' type='email' placeholder='Enter email address'/>

                                </Col>
                            </Row>
                            <Form.Control minLength={6}  onChange={(e)=>setPassword(e.target.value)} required style={{boxShadow:"0px 0px"}} className='mb-1 py-2 shadow-none' type='password' placeholder='Create password'/>
                            <Form.Control minLength={6} onChange={(e)=>setPassword2(e.target.value)} required  style={{boxShadow:"0px 0px"}} className=' py-2 shadow-none' type='password' placeholder='Repeat password'/>
                            <Button type='submit' className='btn w-100 mt-3 text-white py-3' style={{backgroundColor:primaryColor}}>
                                 {uploading?<Spinner/>:"Register"}
                            </Button>
                        </Form.Group>
                    </Form>
                    <Stack className='mt-4 d-flex justify-content-center' direction='horizontal'>
                    <Paragraph text={`Already registered? `}/><Nav.Link className='ms-2' href='/login'><Paragraph fontWeight={700} color={primaryColor} text={`Login`}/></Nav.Link> 

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

export default RegisterPage
