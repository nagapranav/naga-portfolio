import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import * as React from 'react';
function Contact() {
    return (
        <div className="contact">
            <div className='contact-info'>
                <h1 className='ci-title'>Contact Info</h1>
                <p>Address: 19/39, Rajaji street, </p>
                <p>Karur-639001</p>
                <p>Phone: 7708825306</p>
                <p>Email : nagapranav023@gmail.com</p>
            </div>
            <div className='contact-form'>
                <h1 className='ci-title'>Contact form</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '80%' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '28ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                        <TextField id="outlined-basic" label="Subject" variant="outlined" />
                    </Box>
                    <div>
                        <TextareaAutosize
                            id="outlined-name"
                            aria-label="Message"
                            minRows={5}
                            placeholder="Your Message Here"
                            className='textArea'
                        />
                    </div>
                    <div className='send-btn'> 
                        <Stack direction="row" spacing={2}>

                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </div>
                </Box>
            </div>

        </div >
    )
}

export default Contact;