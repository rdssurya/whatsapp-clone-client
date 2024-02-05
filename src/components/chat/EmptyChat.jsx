import { Box, Typography, styled, Divider } from '@mui/material';
import React from 'react';
import { emptyChatImage } from '../../assets/data';

const Component = styled(Box)`
  backgroud: #f8f9fa;
  padding: 30px 0px;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
    padding: 0px 200px;
`;

const Image = styled("img")({
  width: "400px",
  marginTop: "100px"
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0px 10px 0px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const Subtitle = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  color: #667781;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0px;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="img" />
        <Title>WhatsApp Web</Title>
        <Subtitle>Now send and receive messages without keeping your phone online.</Subtitle>
        <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;