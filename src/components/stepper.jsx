  import { useState } from "react";
import { FaCheck } from "react-icons/fa"; 
import GeneralInfoStep from "./steps/GeneralInfo";
import BenefitsStep from "./steps/Benefits";
import PropertiesStep from "./steps/Propertiese";
import OtherStep from "./steps/Other";
import OverviewStep from "./steps/Overview";
    
function Stepper () {
  const steps = [
    "General Info",
    "Benefits",
    "Properties",
    "Other",
    "Overview",
  ];
 
 const [ingredientData, setIngredientData] = useState({
    ingredientName: "",
    scientificName: "",
    sanskritName: "",
    description: "",
    ingredientImage: null,
    status: 'active'
  });
 
  // pagedata variable  
  const stepComponents = [
    <GeneralInfoStep ingredientData={ingredientData} setIngredientData={setIngredientData} />,
    <BenefitsStep />,
    <PropertiesStep />,
    <OtherStep />,
    <OverviewStep ingredientData={ingredientData} />,
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };
 
 
  return (
     <div className="container mt-4">
      {/* Stepper */}
      <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isDone = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          let circleClass = "";
          let labelClass = "";

          if (isDone) {
            circleClass = "bg-success text-white";
            labelClass = "text-success";
          } else if (isCurrent) {
            circleClass = "bg-white border border-success text-success";
            labelClass = "text-success";
          } else {
            circleClass = "bg-white border border-secondary text-secondary";
            labelClass = "text-secondary";
          }

          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center position-relative flex-fill"
              style={{ cursor: "pointer" }}
              onClick={() => setCurrentStep(stepNumber)}
            >
              {/* Line to next step */}
              {index < steps.length - 1 && (
                <div
                  className="position-absolute"
                  style={{
                    top: "25%",
                    // left: "25%",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#6c757d",
                    zIndex: 0,
                    transform: "translateX(50%)",
                  }}
                ></div>
              )}
              {/* Circle */}
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${circleClass}`}
                style={{
                  width: "35px",
                  height: "35px",
                  zIndex: 1,
                }}
              >
                {isDone ? <FaCheck /> : stepNumber}
              </div>

              {/* Label */}
              <small className={`mt-1 text-center ${labelClass}`} style={{ width: "80px" }}>
                {label}
              </small>
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div className="card p-3 mb-2 bg-light border-0">
        {stepComponents[currentStep - 1]}
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-center mb-2 ">

        {/* Show Next button or Submit button */}
        {currentStep < steps.length ? (
          <div>
            <button
          type="submit"
          id="save-btn"
          className="btn btn-success px-5 py-1 me-3 rounded "
          // onClick={handleSave}
        >
          Save
        </button>
        <button
          id="next-btn"
          className="btn  px-5 py-1 rounded "
          style={{background: 'white'}}
          onClick={goNext}
        >
          Next
        </button>
          </div>
        ) : (
          <button
          type="submit"
          id="save-btn"
          className="btn btn-success px-5 py-1 me-3 rounded "
        // onClick={handleSubmit}
        >
          Submit
        </button>
        )}
      </div>
    </div>
   );
};

export default Stepper;

    // const handleSave = () => {
    //     console.log("Saving General Info:", pageData); 
    //     setIngredientData((prev) => ({
    //         ...prev,
    //         ingredientName: pageData.ingredientName,
    //         scientificName: pageData.scientificName,
    //         sanskritName: pageData.sanskritName,
    //         description: pageData.description,
    //         ingredientImage: pageData.ingredientImage,
    //     }));
          // Handler to update fields from each page
  // const updateData = (pageData) => {
  //   setIngredientData((prev) => ({
  //     ...prev,
  //     ...pageData
  //   }));
  // };

    //  };
