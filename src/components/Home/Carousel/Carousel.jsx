import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'NIKE Jordan',
        imgPath:
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/523549c2-8625-4661-aa09-4d61b8ab7d2e/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-jordan-1-mid-xMNLGv.png',
    },
    {
        label: 'NIKE',
        imgPath:
            'data:image/jpeg;base64,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',
    },
    {
        label: 'NIKE',
        imgPath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnJgNGl9iNzvi8tArg74bPw7NqofyFnmb4A&usqp=CAU',
    },
    {
        label: 'LIMITET JORDANS',
        imgPath:
            'https://static-sl.insales.ru/images/products/1/7912/373169896/Air-Jordan-1-High-OG-WMNS-Tie-Dye-CD0461-100-Release-Date-4.jpg',
    },
    {
        label: 'NIKE Jordan',
        imgPath:
            'https://cdn.aizel.ru/i/1278344.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        margin: '0px auto',
        backgroundColor: '#b22222'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingLeft: '0',
        backgroundColor: '#B22222',
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));


const Carousel = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

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
        <div className={classes.root}>
            <Grid container justify='center'>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </Grid>
        </div>
    );
};

export default Carousel;