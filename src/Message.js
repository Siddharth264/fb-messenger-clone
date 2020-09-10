import React, {forwardRef} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import db from './firebase';



const Message = forwardRef(({messageId, message, username}, ref
) => {
    
    
    const isUser = username === message.username
    return (
        <div ref={ref}  className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message_guestCard"}>
            <CardContent>
            <Typography color = 'blue' variant="h5" component="h2">
            {!isUser &&  `${message.username || 'Unknown User'} :`} {message.message} 

            {
                isUser ? (
                    <Button  disabled={username !== message.username} onClick={(event) => db.collection('messages').doc(messageId).delete()}><DeleteIcon/></Button>

                ) : (
                    <small></small>
                )
            }

            
            </Typography>
            
            </CardContent>
            </Card>
        </div>
    )
})

export default Message
