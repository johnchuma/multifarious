import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Heading2 from '../widgets/heading2'
import { AiFillHome, AiFillYoutube } from 'react-icons/ai'
import { mutedText } from '../utils/company_colors'
import Paragraph from '../widgets/paragraph'
import Youtube from 'react-youtube'
// import TiktokEmbed from 'react-tiktok-embed'

const YoutubePage = () => {
    const videos = [
        'tNLG3VocLpk',
        '0oAP59B5pC4',
        '3H3yuiGynYE',
        'IBWkHHFmMrs',
        '031a33zwjfo',
        '0QLQ1q98U3I',
        'oZluWfnZXT4'
      ];
    
      const opts = {
        width: '100%',
        height:'auto',
        borderRadius:10,
        playerVars: {
          autoplay: 0
        }
      };
    return (
        <Container>
            <Heading2 text={`Youtube videos`}/>
            <Stack className='d-flex mt-2 ' direction='horizontal'>

                <AiFillYoutube color={mutedText}/><Paragraph color={mutedText} text={`Watch and earn money`}/>
              
               </Stack>
               <Row className='mt-4'>
               {videos.map((videoId, index) => (
        <Col md={4} className='mb-3' key={index}>
          <div style={{ position: 'relative'  }}>
            <Youtube videoId={videoId} opts={opts} />
          </div>
        </Col>
      ))}
               </Row>
        </Container>
    )
}

export default YoutubePage
