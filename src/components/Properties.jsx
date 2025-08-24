import { useState } from "react";

function Properties({ pageData, setPageData }) {
  const [formValues, setFormValues] = useState({
    rosa: pageData.ayurvedicProperties.rosa || "",
    veerya: pageData.ayurvedicProperties.veerya || "",
    guna: pageData.ayurvedicProperties.guna || "",
    vipaka: pageData.ayurvedicProperties.vipaka || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setPageData((prev) => ({
      ...prev,
      ayurvedicProperties: { ...prev.ayurvedicProperties, [name]: value },
    }));
  
  };

  

  return (
    // <div className="container my-5">
      <div className="  px-4 pt-4">
        <h1 className="h5 fw-bold text-dark mb-4">Ayurvedic Properties</h1>

        {/* Row 1 */}
        <div className="row mb-4 g-4">
          <div className="col-12 col-md-6">
            <div className="form-floating-label">
              <label htmlFor="rosa" className="form-label fw-medium">
                Rosa <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-3 pt-3"
                id="rosa"
                name="rosa"
                placeholder="type here.."
                value={formValues.rosa}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-floating-label">
              <label htmlFor="veerya" className="form-label fw-medium">
                Veerya <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-3 pt-3"
                id="veerya"
                name="veerya"
                placeholder="type here.."
                value={formValues.veerya}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-4 g-4">
          <div className="col-12 col-md-6">
            <div className="form-floating-label">
              <label htmlFor="guna" className="form-label fw-medium">
                Guna <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-3 pt-3"
                id="guna"
                name="guna"
                placeholder="type here.."
                value={formValues.guna}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-floating-label">
              <label htmlFor="vipaka" className="form-label fw-medium">
                Vipaka <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-3 pt-3"
                id="vipaka"
                name="vipaka"
                placeholder="type here.."
                value={formValues.vipaka}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

         
      </div>
    // </div>
  );
}

export default Properties;
