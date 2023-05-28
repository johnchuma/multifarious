import React, { useContext, useEffect, useRef, useState } from 'react'
import NavigationBar from '../widgets/navbar'
import { Button, Col, Container, Form, Nav, Offcanvas, OverlayTrigger, Popover, Row, Stack, Table } from 'react-bootstrap'
import { backgroundColor, backgroundColor2, mutedText, primaryColor, textColor } from '../utils/company_colors'
import Heading from '../widgets/heading'
import Heading2 from '../widgets/heading2'
import { AiFillCalendar, AiFillDashboard, AiFillDollarCircle, AiFillHome, AiFillPieChart, AiFillTrademarkCircle, AiFillVideoCamera, AiFillYoutube, AiOutlineClose, AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'
import Heading3 from '../widgets/heading3'
import { BsCardChecklist, BsChevronDown, BsPerson, BsPersonAdd } from 'react-icons/bs'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { logOut } from '../controller/auth_controller'
import Lottie from 'lottie-web'
import { AuthContext } from '../utils/auth_provider'

const LayoutPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const animationController = useRef(null);
  
 
    useEffect(() => {
      
        Lottie.destroy()
        Lottie.loadAnimation({
            container:animationController.current,
            autoplay:true,
            path:'wallet.json',
            renderer:'svg',
            loop:true
        })},[])
        const {user} = useContext(AuthContext)
    return (
        <>
        
        <Container fluid>
        <Row className='mt-2'>
            <Col style={{height:"100vh"}}  className=' mt-3 d-none d-md-block' md={3}>
            <Container  className='mb-4'>
            <Stack className='' direction='horizontal'>
              <Heading2 color={textColor} text={`Multifurious`}/>
             <AiOutlineMenu onClick={()=>setShowMenu(true)} className='text-end ms-auto d-block d-md-none'/>
            
              </Stack>
              <Offcanvas show={showMenu} onHide={()=>setShowMenu(false)}>
                <Offcanvas.Header className='d-flex justify-content-end'>
                    <AiOutlineClose color={textColor} onClick={()=>setShowMenu(false)}/>
                </Offcanvas.Header>
                <Offcanvas.Body className='px-5 py-2'>
                {[{title:"Dashboard",icon:<AiFillDashboard />},
                {title:"Youtube videos",icon:<AiFillYoutube />},
                {title:"Tiktok videos",icon:<AiFillVideoCamera />},
                {title:"Invited users",icon:<AiOutlineUser />},
                {title:"My earnings",icon:<AiOutlineUser />},
                {title:"Transaction history",icon:<AiOutlineUser />},
                // {title:"Invited users",icon:<AiOutlineUser />},

            

            ].map((item,index)=>
                <div className={`btn px-4 py-3 w-100 ${currentTab== index?'text-white':''} `} style={{backgroundColor:currentTab ==index? primaryColor:null}}>
                    <Stack direction='horizontal'>
                        {item.icon}
                        <Paragraph color={currentTab == index?'white':textColor}  className={`ms-2`} text={item.title}/>
                    </Stack>
                </div>)}
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
            
                {[{title:"Dashboard", path:"/",icon:<AiFillDashboard />},
                {title:"Youtube videos", path:"/youtube",icon:<AiFillYoutube />},
                {title:"Tiktok videos", path:"/tiktok",icon:<AiFillVideoCamera />},
                {title:"Invited users", path:"/invitedUsers",icon:<BsPersonAdd />},
                {title:"My earnings", path:"/earnings",icon:<AiFillDollarCircle />},
                {title:"Transaction history", path:"/history",icon:<BsCardChecklist />},
                // {title:"Invited users",icon:<AiOutlineUser />},

            

            ].map((item,index)=>
                <div onClick={()=>{
                    setCurrentTab(index)
                    navigate(item.path)

                }} className={`btn px-4 py-3 w-100 ${location.pathname === item.path?'text-white':''} `} style={{backgroundColor:location.pathname === item.path? primaryColor:null}}>
                    <Stack direction='horizontal'>
                        {item.icon}
                        <Paragraph color={location.pathname === item.path?'white':textColor}  className={`ms-2`} text={item.title}/>
                    </Stack>
                </div>)}
                <div className='rounded p-3 ' style={{borderStyle:"solid",borderColor:"#e2e2e2"}}>
                <div style={{height:100}} ref={animationController}></div>
                 <Heading2 className={`text-center mt-2`} text={`My wallet`}/>
                </div>
            </Col>
            <Col  className=' p-0'  style={{backgroundColor:backgroundColor2}}>
            <Stack className='bg-white px-3 py-2 mb-2' direction='horizontal'>
        <Form.Control style={{width:"50%",backgroundColor:backgroundColor2}} className='border-0 d-none d-md-block shadow-none' placeholder='Search here'/>
        
        <Nav className='d-flex d-none d-md-block ms-auto align-items-center justify-content-end'>
            <OverlayTrigger 
           trigger={`click`}
            placement='bottom'
            overlay={
                <Popover >
                <Popover.Header>
                    <Nav.Link onClick={()=>logOut()}>
                    <Paragraph  className={`py-2`} color={`red`} text={`Sign out`}/>
                    </Nav.Link>
                </Popover.Header>
            </Popover>
            }
            >
                <Stack direction='horizontal'>
            <Nav.Link className='p-0 m-0'>
                <div className='d-flex justify-content-center align-items-center rounded-circle' style={{height:40,width:40,backgroundColor:"#FFCDAC"}}>
                    <AiOutlineUser color='#B75413'/>
                </div>
            </Nav.Link>
        <Nav.Link >
                <Paragraph text={user&&user.username}/>
                <Paragraph color={mutedText} className={`mt-1`} fontSize={`0.7vw`} text={user&&user.email}/>
            </Nav.Link>
            <BsChevronDown color={mutedText}/>
            </Stack>
        </OverlayTrigger>
           
            

           
        </Nav>
        </Stack>
           <Outlet/>
           
            </Col>
        </Row>
        </Container>
        
        </>
    )
}

export default LayoutPage
