import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { sendMessage } from '../services/api'; // Import our API function

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  
  // State to show success/failure message to user
  const [feedback, setFeedback] = useState<string>('');

  const form = useRef<any>();

  const sendData = (e: any) => {
    e.preventDefault();

    // Validation
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const data = {
          name: name,
          email: email,
          message: message
      };

      // Send to Django
      sendMessage(data)
        .then(response => {
            console.log('SUCCESS!', response.status);
            setFeedback('Message sent successfully!');
            // Clear form
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch(error => {
            console.error('FAILED...', error);
            setFeedback('Failed to send message. Please try again.');
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendData}>
              Send
            </Button>
            
            {/* Show feedback message */}
            {feedback && (
                <p style={{ marginTop: '20px', color: feedback.includes('Failed') ? 'red' : 'green' }}>
                    {feedback}
                </p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
