import React, { useState } from 'react'
import NavigationBar from '../widgets/navbar'
import { Col, Container, Form, Nav, Offcanvas, OverlayTrigger, Popover, Row, Stack, Table } from 'react-bootstrap'
import { backgroundColor, backgroundColor2, mutedText, primaryColor, textColor } from '../utils/company_colors'
import Heading from '../widgets/heading'
import Heading2 from '../widgets/heading2'
import { AiFillCalendar, AiFillDashboard, AiFillHome, AiFillPieChart, AiFillVideoCamera, AiFillYoutube, AiOutlineClose, AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'
import Heading3 from '../widgets/heading3'
import { BsChevronDown } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
const DashboardPage = () => {
    return (
        <Container>
           <Heading2 text={`Dashboard`}/>
            <Row>
                <Col >
            <Stack className='d-flex mt-2 ' direction='horizontal'>

                <AiFillHome className='me-1' color={mutedText}/><Paragraph color={mutedText} text={`Home>`}/>
               <Paragraph color={mutedText} text={`Dashboard`}/>
               </Stack>
                </Col>
                <Col >
            <Stack className='d-flex mt-2 justify-content-end ' direction='horizontal'>
                <AiFillCalendar color={mutedText} className='me-1'/>
                <Paragraph color={mutedText} text={`21 feb - 24 march`}/>
                </Stack>
                    </Col>
            </Row>
              
              
        
                <Row className='mt-4'>
                    <Col md={4}>
                     <div className='bg-white rounded p-3 mt-1'>
                            <Stack direction='horizontal'>
                                <Paragraph text={`Total earnings`}/>
                            </Stack>
                            <Stack className='mt-2' direction='horizontal'>
                                <div className='d-flex rounded justify-content-center align-items-center' style={{height:25,width:25,backgroundColor:"#39B153"}} ><AiFillPieChart color='white'/></div>
                                <Heading3 className={`ms-2`} text={`120000Tsh`}/>
                            </Stack>
                     </div>
                    </Col>
                    <Col md={4}>
                     <div className='bg-white rounded p-3 mt-1'>
                            <Stack direction='horizontal'>
                                <Paragraph text={`Pending payments`}/>
                            </Stack>
                            <Stack className='mt-2' direction='horizontal'>
                                <div className='d-flex rounded justify-content-center align-items-center' style={{height:25,width:25,backgroundColor:"#3B39B1"}} ><AiFillPieChart color='white'/></div>
                                <Heading3 className={`ms-2`} text={`146000Tsh`}/>
                            </Stack>
                     </div>
                    </Col>
                    <Col md={4}>
                     <div className='bg-white rounded p-3 mt-1'>
                            <Stack direction='horizontal'>
                                <Paragraph text={`Invited users`}/>
                            </Stack>
                            <Stack className='mt-2' direction='horizontal'>
                                <div className='d-flex rounded justify-content-center align-items-center' style={{height:25,width:25,backgroundColor:"#A839B1"}} >
                                    <AiOutlineUserAdd color='white'/></div>
                                <Heading3 className={`ms-2`} text={`120000Tsh`}/>
                            </Stack>
                     </div>
                    </Col>
                  
                </Row>
                <Row>
                    <Col>
                    <div className='bg-white rounded p-3 mt-4'>
                    <Heading3 text={`Recent invited users`}/>
                    <div className='table-responsive'>
                    <table className='table table-striped mt-3'>
                        <thead>
                            <tr>
                                <th style={{color:mutedText}}><Paragraph color={mutedText} text={`Profile`}/></th>
                                <th style={{color:mutedText}}><Paragraph color={mutedText} text={`Username`}/></th>
                                <th style={{color:mutedText}}><Paragraph color={mutedText} text={`Email`}/></th>
                                <th style={{color:mutedText}}><Paragraph color={mutedText} text={`Joined at`}/></th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            <tr>
                                <td>
                                <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                    <AiOutlineUserAdd color='black'/></div>
                                </td>
                                <td><Paragraph  text={`John Chuma`}/></td>
                                <td><Paragraph  text={`johnvchuma@gmail.com`}/></td>
                                <td><Paragraph  text={`5 days ago`}/></td>


                            </tr>
                            <tr>
                                <td>
                                <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                    <AiOutlineUserAdd color='black'/></div>
                                </td>
                                <td><Paragraph  text={`Zilpha Chuma`}/></td>
                                <td><Paragraph  text={`zilphachuma@gmail.com`}/></td>
                                <td><Paragraph  text={`4 days ago`}/></td>


                            </tr>
                            <tr>
                                <td>
                                <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                    <AiOutlineUserAdd color='black'/></div>
                                </td>
                                <td><Paragraph  text={`Jacob Athumani`}/></td>
                                <td><Paragraph  text={`jackob@gmail.com`}/></td>
                                <td><Paragraph  text={`2 days ago`}/></td>


                            </tr>
                        </tbody>
                     </table>
                    </div>
                     
                        
                     </div>
                    </Col>
                </Row>
           </Container>
    )
}

export default DashboardPage
