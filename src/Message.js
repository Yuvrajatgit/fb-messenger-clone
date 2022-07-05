import { Card, CardContent, Typography } from '@mui/material';
import React,{forwardRef} from 'react'
import './Message.css';

const Message = forwardRef(({username, message},ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
    <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
            <Typography className='message_x' color="black" variant="h5" component="h2">
                { !isUser && `${message.username || 'Nameless User'}:`} {message.message}
            </Typography>
        </CardContent>
    </Card>
    </div>
  )
})

export default Message;