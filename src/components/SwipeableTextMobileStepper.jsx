import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { activityCard } from "../constants";
import { styles } from "../styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = activityCard.length;

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
    <Box sx={{ maxWidth: 420, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="overflow-clip rounded-3xl"
      >
        {activityCard.map((step, index) => (
          <div key={step.title} className="relative">
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    objectFit: "cover",
                    height: 320,
                    display: "block",
                    maxWidth: 420,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.img}
                  alt={step.title}
                />
                <div className="filter-gradient absolute bottom-0 h-1/2 w-full z-10 mix-blend-multiply" />
              </>
            ) : null}
            <div
              className={`${styles.paddingX} absolute bottom-[33px] left-1/2 z-20 w-full -translate-x-1/2`}
            >
              <h5 className={`${styles.sectionSubText} text-center text-white`}>
                {step.title}
              </h5>
              <p
                className={`${styles.sectionParagraphText} mt-[9px] text-center text-white`}
              >
                {step.text}
              </p>
            </div>
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
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
