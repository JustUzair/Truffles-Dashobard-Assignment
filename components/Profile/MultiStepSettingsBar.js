import Image from "next/image";
import { ProgressBar, Step } from "react-step-progress-bar";
import visited from "../../images/right-tick.svg";
import activeDot from "../../images/purple-dot.svg";
const MultiStepSettingsBar = ({ progress, setProgress }) => {
  let stepPercentage = 0;
  if (progress === 1) {
    stepPercentage = 16;
  } else if (progress === 2) {
    stepPercentage = 49.5;
  } else if (progress === 3) {
    stepPercentage = 82.5;
  } else if (progress === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="flex items-center justify-around mr-[10px]">
      <div className="progress-bar--container ">
        <ProgressBar percent={stepPercentage} title={"What to do next??"}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep accomplished ${
                  accomplished ? "accomplished" : null
                } ${progress > 1 && "completed"}`}
                onClick={e => {
                  setProgress(1);
                }}
              >
                {progress === 1 && <Image src={activeDot} alt="active" />}
                {/* <Image src={activeDot} alt="active" /> */}
                {progress > 1 && <Image src={visited} alt="active" />}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                } ${progress > 2 && "completed"}`}
                onClick={e => {
                  setProgress(2);
                }}
              >
                {progress == 2 && <Image src={activeDot} alt="active" />}
                {progress > 2 && <Image src={visited} alt="active" />}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished " : null
                } ${progress > 3 && "completed"}`}
                onClick={() => setProgress(3)}
              >
                {progress == 3 && <Image src={activeDot} alt="active" />}
                {progress > 3 && <Image src={visited} alt="active" />}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${accomplished ? "accomplished " : null}
              ${progress > 4 && "completed"}`}
                onClick={() => setProgress(4)}
              >
                {progress == 4 && <Image src={activeDot} alt="active" />}

                {progress > 4 && <Image src={visited} alt="active" />}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>

      <div>
        <div className="progress-bar--labels flex flex-col items-center mt-[35px] pb-[7.9rem]">
          <span
            className={`font-[600] leading-[16px] mb-[65px] w-[200px] ${
              progress == 1 && "text-[#7445F8]"
            } `}
          >
            User Information
          </span>

          <span
            className={`font-[600] leading-[16px]  mb-[65px] w-[200px] ${
              progress == 2 && "text-[#7445F8]"
            }`}
          >
            Business Information 1
          </span>

          <span
            className={`font-[600] leading-[16px]  mb-[65px] w-[200px] ${
              progress == 3 && "text-[#7445F8]"
            }`}
          >
            Business Information 2
          </span>

          <span
            className={`font-[600] leading-[16px]  mb-[65px] w-[200px] ${
              progress == 4 && "text-[#7445F8]"
            }`}
          >
            Upload Documents
          </span>
        </div>
      </div>
    </div>
  );
};

export default MultiStepSettingsBar;
