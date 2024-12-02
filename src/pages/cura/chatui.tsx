import React, { useState } from 'react';
import SidebarPatient from '../../components/sidebarPatient/sidebarPatient';
import { Avatar, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import './chatui.scss';
import SendIcon from '@mui/icons-material/Send';
import patient from "../../components/images/patient.jpg";
import bot from "../../components/images/bot.png";
import axios from 'axios';

interface Message {
    type: 'user' | 'bot';
    text: string;
    options?: string[];
}

const ChatUI: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Append user message to the chat
        const userMessage: Message = { type: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            // Send user message to the backend
            const response = await axios.post('http://localhost:5000/ask', { question: input });
            const botMessage: Message = { type: 'bot', text: response.data.answer };

            // Append bot response to the chat
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error communicating with the backend:", error);
            const errorMessage: Message = { type: 'bot', text: 'Sorry, there was an error. Please try again later.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            // Clear input field
            setInput("");
        }
    };

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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <IconButton
                        color="primary"
                        aria-label="send"
                        onClick={sendMessage}
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
