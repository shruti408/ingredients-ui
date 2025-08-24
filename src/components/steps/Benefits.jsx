import WhyToUse from "../whyToUse";
import Benefits from "../Benefits";
//  import PrakritiImpact from "../components/PrakritiImpact";
import { useState, } from "react";

function BenefitsStep() {
  // Local state for this page
  const [pageData, setPageData] = useState({
    whyToUse: [],
    prakritiImpact: {
      vata: { value: "", reason: "" },
      kapha: { value: "", reason: "" },
      pitta: { value: "", reason: "" }
    },
    benefits: [{ emoji: "", benefit: "" }]
  });

  // Initialize pageData if ingredientData already has values
  //   useEffect(() => {
  //   if (ingredientData) {
  //     setPageData({
  //       whyToUse: ingredientData.whyToUse ,
  //       prakritiImpact: ingredientData.prakritiImpact ,
  //       benefits: ingredientData.benefits ,

  //     });
  //   }
  // }, [ingredientData, pageData]);

  // const handleSave = () => {
  //   console.log("Saving Benefits Info:", pageData);
  //   setIngredientData((prev) => ({
  //     ...prev,
  //     whyToUse: pageData.whyToUse,
  //     prakritiImpact: pageData.prakritiImpact,
  //     benefits: pageData.benefits,
  //   }));
  //  };



  return (
    <>

      <div className="card p-4 rounded-4 border-0" style={{ background: 'white' }}>
        <div className="row">
          <WhyToUse
            data={pageData}
            setPageData={setPageData}
          />
        </div >
        {/* <div> */}
        {/* <PrakritiImpact
        data={pageData}
        setPageData={setPageData}
      /> */}
        {/* </div> */}
        <div className="row">
          <Benefits
            pageData={pageData}
            setPageData={setPageData}
          />
        </div>
      </div>
    </>
  );
}

export default BenefitsStep;