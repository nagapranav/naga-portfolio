import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'HTML',
        imgPath:
            'https://wallpapercave.com/wp/wp4325531.jpg',
    },
    {
        label: 'CSS',
        imgPath:
            'https://cdn-media-1.freecodecamp.org/images/1*H0IBb9kvGI3eIuL1sGmWug.jpeg',
    },
    {
        label: 'JQuery',
        imgPath:
            'https://www.pngitem.com/pimgs/m/206-2069875_html5-css3-javascript-jquery-hd-png-download.png',
    },
    {
        label: 'Javascript',
        imgPath:
            'https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png',
    },
    {
        label: 'Angular',
        imgPath:
            'https://wallpaperaccess.com/full/1555192.jpg',
    },
    {
        label: 'ReactJS',
        imgPath:
            'https://wallpaperaccess.com/full/3909258.jpg',
    },
];

function About() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

        <div className="about">


            <h1 className="about-title">About Me</h1>
            <div className="about-content">

                <p>Hello!

                    My name is Nagalakshmi A and I enjoy creating things that live on the internet. I'm a Front-End Developer located in Madurai. I have serious passion in creating web application using UI stuffs.</p>


                <p>Well-organised person, problem solver, independent employee with high attention to detail. And also i have intrest to develope digital creations like Technical post in instagram and developeing blogs. Other than this am a pencil sketch artist and quotes creater.</p>
                <p>Well-organised person, problem solver, independent employee with high attention to detail. And also i have intrest to develope digital creations like Technical post in instagram and developeing blogs. Other than this am a pencil sketch artist and quotes creater.</p>

            </div>
            <div className='about-skills'>
                <h1>Skills</h1>
                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography>{images[activeStep].label}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 255,
                                            display: 'block',
                                            maxWidth: 400,
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
        </div>
    )
}

export default About;