import { Box, Dialog, styled } from '@mui/material';
import Menu from './menu/Menu';
import React, { useContext } from 'react';
import EmptyChat from './EmptyChat';
import ChatBox from './ChatBox';
import { AccountContext } from '../context/AccountProvider';

const dialogStyle = {
    height: "95%",
    maxHeight: "100%",
    margin: "20px",
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
    overflow: "hidden",
    borderRadius: "0px"
};

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`;

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

   return (
    <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true} maxWidth={"md"}>
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                {Object.keys(person).length === 0 ? <EmptyChat /> : <ChatBox />}
            </RightComponent>
        </Component>
    </Dialog>
  );
};

export default ChatDialog;