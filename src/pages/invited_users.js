import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Nav, Row, Stack } from 'react-bootstrap';
import Heading2 from '../widgets/heading2';
import { AiFillHome, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai';
import { mutedText, primaryColor } from '../utils/company_colors';
import Paragraph from '../widgets/paragraph';
import { AuthContext } from '../utils/auth_provider';
import Heading3 from '../widgets/heading3';
import { getInvitedUsers } from '../controller/auth_controller';

const InvitedUsers = () => {
    const {user} = useContext(AuthContext)
    const [currentLevel, setCurrentLevel] = useState(0);
    const [invitedUsers, setInvitedUsers] = useState(null);
    const [copied, setCopied] = useState(false);

   useEffect(() => {
    getInvitedUsers().then((response)=>{
        setInvitedUsers(response)
    })
   }, []);
   const inviteLink = user&& `localhost:3000/register/${user.referralCode}`;
   const copyClipboard = async()=>{
    try {
       await navigator.clipboard.writeText(inviteLink)
       setCopied(true)
    } catch (error) {
        console.log(error)
    }
   }
    return (
        <Container>
             {/* <Heading2  text=
       {invitedUsers&&invitedUsers.level1.length}
        /> */}
        <Heading2 text={`Invited Users`} />
        <Stack className='d-flex mt-2' direction='horizontal'>
          <AiOutlineUser color={mutedText} />
          <Paragraph color={mutedText} text={`All people you invited`} />
        
        </Stack>
        <Row>
            <Col md="12">
            <Alert variant='success' className='m-0 mt-2'>
                <Alert.Heading><Heading3 text={`Invitation link`}/></Alert.Heading>
                <Stack className='d-flex justify-content-between' direction='horizontal'>
                    <Paragraph color={mutedText} text={inviteLink}/>
               <Nav.Link onClick={copyClipboard}>

               <Paragraph color={primaryColor} fontWeight={700} text={copied?`Copied`:`Copy Link`}/>
                </Nav.Link> 

                </Stack>
          </Alert>
            </Col>
        </Row>
       
          <Stack className='mt-3' direction='horizontal'>
            {
                ["Level 1","Level 2","Level 3"].map((item,index)=>{
                    return <Button  onClick={()=>setCurrentLevel(index)}
                    style={{backgroundColor:currentLevel === index?primaryColor:"white"}} 
                    className='btn border-0 mt-2 me-2 shadow-none px-5 py-3'>
                    <Paragraph color={currentLevel === index?"white":"black"}  text={item}/>

                    </Button>
                })
            }
          </Stack>
          <div className='p-3 bg-white mt-4 rounded'>
            <Heading3 text={`Level ${currentLevel+1} invited users `}/>
            
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

                        { invitedUsers &&
                               currentLevel == 0 && invitedUsers.level1.map((item)=>{
                                    return  <tr>
                                    <td>
                                    <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                        <AiOutlineUserAdd color='black'/></div>
                                    </td>
                                    <td><Paragraph  text={item.username}/></td>
                                    <td><Paragraph  text={item.email}/></td>
                                    <td><Paragraph  text={`5 days ago`}/></td>
                                </tr>
                                })
                            }
                          
                             { invitedUsers &&
                               currentLevel === 1 && invitedUsers.level2.map((item)=>{
                                    return  <tr>
                                    <td>
                                    <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                        <AiOutlineUserAdd color='black'/></div>
                                    </td>
                                    <td><Paragraph  text={item.username}/></td>
                                    <td><Paragraph  text={item.email}/></td>
                                    <td><Paragraph  text={`5 days ago`}/></td>
                                </tr>
                                })
                            }
                             { invitedUsers &&
                               currentLevel === 2 && invitedUsers.level3.map((item)=>{
                                    return  <tr>
                                    <td>
                                    <div className='d-flex rounded-circle justify-content-center align-items-center' style={{height:25,width:25}} >
                                        <AiOutlineUserAdd color='black'/></div>
                                    </td>
                                    <td><Paragraph  text={item.username}/></td>
                                    <td><Paragraph  text={item.email}/></td>
                                    <td><Paragraph  text={`5 days ago`}/></td>
                                </tr>
                                })
                            }
                        </tbody>
                     </table>
          </div>
      
      </Container>
    )
}

export default InvitedUsers
