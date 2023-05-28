import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Heading2 from '../widgets/heading2';
import { AiFillHome } from 'react-icons/ai';
import { mutedText } from '../utils/company_colors';
import Paragraph from '../widgets/paragraph';
import { TikTokEmbed } from 'react-social-media-embed';

const TikTokPage = () => {
  const videos = [
    'https://www.tiktok.com/@btsfan9014/video/7224169022965812482?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@btsfan9014/video/7224169022965812482?is_from_webapp=1&sender_device=pc'
  ];

  return (
    <Container>
      <Heading2 text={`TikTok videos`} />
      <Stack className='d-flex mt-2' direction='horizontal'>
        <AiFillHome color={mutedText} />
        <Paragraph color={mutedText} text={`Watch and have fun`} />
      </Stack>
      <Row className='mt-4'>
        {videos.map((videoUrl, index) => (
          <Col md={8} className='mb-3' key={index}>
            <div style={{ position: 'relative', paddingBottom: '100%', height: 0, overflow: 'hidden' }}>
              <TikTokEmbed width='100%' height='auto' url={videoUrl} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TikTokPage;
