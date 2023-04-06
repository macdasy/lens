import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Details from "./Details";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Suggestions from "./Suggestions";


const steps = ["Details", "Suggestions", "Selection"];

export default function StepperComp(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [username, setUName] = React.useState('');
  const [shape, setShape] = React.useState('');
  const [disabled, isDisabled] = React.useState(true);

  function handleName(props){
    setUName(props);
  }

  function handleShape(props){ console.log(props); setShape(props); }

  function setDisabled(props){
    isDisabled(props);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <div style={{ padding: "10%" }} >
            All steps completed - you&apos;re finished
            </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>

      ) : activeStep === 0 ? (

        <React.Fragment>

          <div style={{ padding: "0%" }}>
            <Details handleName={handleName} setDisabled={setDisabled} handleShape={handleShape} />
          </div>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
            <>
            <KeyboardDoubleArrowLeftIcon />
            Back
            </>
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} disabled={disabled}>
              {activeStep === steps.length - 1 ? "Finish" :  <>  Next <KeyboardDoubleArrowRightIcon /> </> }
            </Button>
          </Box>
        </React.Fragment>

      )  : activeStep === 1 ? ( 
      
            <React.Fragment>
            <div style={{ padding: "5%" }}>
                <Suggestions name={username} shape={shape}/>
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
            >
                <>
                <KeyboardDoubleArrowLeftIcon />
                Back
                </>
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : <>  Next <KeyboardDoubleArrowRightIcon /> </> }
            </Button>
            </Box>
        </React.Fragment>
      
        ) : (

        <React.Fragment>
          <div style={{ padding: "5%" }}></div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
               <>
                <KeyboardDoubleArrowLeftIcon />
                Back
                </>
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" :  <>  Next <KeyboardDoubleArrowRightIcon /> </> }
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
