import { Box, Typography, styled } from '@mui/material';
import React, { useContext } from 'react';
import {formatDate, downloadMedia} from '../../utils/CommonUtils';
import {iconPDF} from "../../assets/data";
import { AccountContext } from '../context/AccountProvider';
import GetAppIcon from '@mui/icons-material/GetApp';


const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0px 25px 0px 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: auto;
  word-break: keep-all;
`;

const TextMessage = ({message}) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

const ImageMessage = ({message}) =>{
  return (
    <Box>
      {
        message?.text?.includes(".pdf") ? 
        <Box style={{display: "flex"}}>
          <img src={iconPDF} alt="pdf" style={{width: 80}}/>
          <Typography style={{fontSize: 14}}>{message.text.split("/").pop()}</Typography>
        </Box>
        :
        <>
        <img style={{width: 300, height: "100%", objectFit:"cover"}} src={message.text} alt={message.text}/>
        </>
      }
      <Time style={{position: 'absolute', bottom: 0, right: 0}}>
        <GetAppIcon 
          onClick = {(e)=> downloadMedia(e, message.text)}
          style={{marginRight:10,border: '10px solid grey', borderRadius:'50%'}}
          fontSize='small'
        />
        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};

const Message = ({ message }) => {

  const { account } = useContext(AccountContext);

  return (

    <>
      {
        account.sub === message.senderId ?
        <Own>
          {
            message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>
          }
        </Own> : 
        <Wrapper>
          {
            message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>
          }
        </Wrapper>
      }
    </>
  );
};

export default Message;