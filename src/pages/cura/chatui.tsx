import React from 'react';
import SidebarPatient from '../../components/sidebarPatient/sidebarPatient';
import { Avatar, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import './chatui.scss';
import SendIcon from '@mui/icons-material/Send';
import patient from "../../components/images/patient.jpg";
import bot from "../../components/images/bot.png";

const messages = [
    { type: 'user', text: 'I have been experiencing back pain for 7 days. Can you recommend a doctor?' },
    { type: 'bot', text: 'It sounds like you should consult with a Neurologist. Would you like to know more about the available doctors?' },
    { type: 'user', text: 'Yes, please tell me more about them.' },
    {
        type: 'bot',
        text: 'Here are two highly recommended Neurologists in CareFlow:',
        options: [
            'Dr. Janaka Wedarachchi: Over 10 years of experience, specialized in spinal disorders.',
            'Prof. Namal Jayasinghe: 15 years of experience, known for high patient satisfaction in back pain treatments.'
        ]
    },
    { type: 'user', text: 'Can you give me more details about Prof. Namal Jayasinghe?' },
    { type: 'bot', text: 'Prof. Namal Jayasinghe has been practicing Neurology for 15 years. He has a reputation for excellent patient care and specializes in treating various neurological conditions.' },
    { type: 'user', text: 'What about Dr. Janaka Wedarachchi?' },
    { type: 'bot', text: 'Dr. Janaka Wedarachchi has over 10 years of experience and focuses on spinal disorders. Patients appreciate his thorough approach and dedication to their well-being.' },
    { type: 'user', text: 'Thank you for the information!' },
    { type: 'bot', text: 'You are welcome! If you have any other questions or need further assistance, feel free to ask.' }
];

const ChatUI: React.FC = () => {
    return (
        <div className="homecura">
            <SidebarPatient />
            <img src="/images/bg.png" alt="Background" className="background-image" />
            <div className="homeContainercura">
                <div className="chat-window">
                    {messages.map((message, index) => (
                        <div className={`message ${message.type}`} key={index}>
                            <Avatar
                                src={message.type === 'user' ? patient : bot}
                                alt="Avatar"
                                className="avatar"
                            />
                            <div className="bubble">
                                {message.text}
                                {message.options && (
                                    <List className="options-list">
                                        {message.options.map((option, optionIndex) => (
                                            <ListItem key={optionIndex} className="option-item">
                                                <ListItemText primary={`• ${option}`} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Enter a prompt here"
                        className="input-field"
                    />
                    <IconButton
                        color="primary"
                        aria-label="send"
                        sx={{
                            color: '#855CDD', // Send icon color
                            '&:hover': {
                                color: '#855CDD', // Send icon color on hover
                            },
                        }}
                    >
                        <SendIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    );
};

export default ChatUI;
