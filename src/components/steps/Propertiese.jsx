import Properties from "../Properties";
import Formulations from "../Formulations";
import TherapeuticUses from "../TherapeuticUses";
import { useState } from "react";
function PropertiesStep() {
  // Local state for this page

  const [pageData, setPageData] = useState({
    ayurvedicProperties: {
      rosa: "",
      veerya: "",
      guna: "",
      vipaka: ""
    },
    formulations: [{ icon: "", description: "" }],
    uses: [],
  });

  return (
    <>

      <div className="card p-4 rounded-4 border-0" style={{ background: 'white' }}>
        <div className="row"> <Properties pageData={pageData} setPageData={setPageData} />
        </div>
        <div className="row"> <Formulations pageData={pageData} setPageData={setPageData} />
        </div>
        <div className="row"> <TherapeuticUses pageData={pageData} setPageData={setPageData} />
       </div>
       </div>
    </>
  )
}
export default PropertiesStep;