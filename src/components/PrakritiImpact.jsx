import "../App.css";

function PrakritiImpact({ pageData, setPageData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPageData((prev) => ({ ...prev, [name]: value }));
  };
 
  return (
    <div className="container my-5">
      <div className="card rounded-4 p-4 p-md-5">
        <h1 className="h5 fw-bold text-dark mb-4">Prakriti Impact</h1>

        <div className="row mb-4 g-4">
          {/* Vata */}
          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="vata" className="form-label fw-medium">
                Vata <span className="text-danger">*</span>
              </label>
              <select
                className="form-select rounded-3 p-3"
                id="vata"
                name="vata"
                // value={pageData.PrakritiImpact.vata.value   || ""}
                onChange={handleChange}
              >
                <option value="" disabled>Select</option>
                <option value="balanced">Balanced</option>
                <option value="mild">Mildly Increasing</option>
                <option value="unbalanced">Unbalanced</option>
                <option value="aggravate">Aggravate</option>
              </select>
            </div>
            <div className="form-floating-label mt-4">
              <label htmlFor="vataReason" className="form-label fw-medium">
                Vata Reason
              </label>
              <input
                type="text"
                className="form-control rounded-3 p-3"
                id="vataReason"
                name="vataReason"
                placeholder="Type here..."
                // value={pageData.PrakritiImpact.vata.reason || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Kapha */}
          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="kapha" className="form-label fw-medium">
                Kapha <span className="text-danger">*</span>
              </label>
              <select
                className="form-select rounded-3 p-3"
                id="kapha"
                name="kapha"
                // value={pageData.PrakritiImpact.kapha || ""}
                onChange={handleChange}
              >
                <option value="" disabled>Select</option>
                <option value="balanced">Balanced</option>
                <option value="mild">Mildly Increasing</option>
                <option value="unbalanced">Unbalanced</option>
                <option value="aggravate">Aggravate</option>
              </select>
            </div>
            <div className="form-floating-label mt-4">
              <label htmlFor="kaphaReason" className="form-label fw-medium">
                Kapha Reason
              </label>
              <input
                type="text"
                className="form-control rounded-3 p-3"
                id="kaphaReason"
                name="kaphaReason"
                placeholder="Type here..."
                // value={pageData.PrakritiImpact.kapha.reason || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Pitta */}
          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="pitta" className="form-label fw-medium">
                Pitta <span className="text-danger">*</span>
              </label>
              <select
                className="form-select rounded-3 p-3"
                id="pitta"
                name="pitta"
                // value={pageData.PrakritiImpact.pitta.value || ""}
                onChange={handleChange}
              >
                <option value="" disabled>Select</option>
                <option value="balanced">Balanced</option>
                <option value="mild">Mildly Increasing</option>
                <option value="unbalanced">Unbalanced</option>
                <option value="aggravate">Aggravate</option>
              </select>
            </div>
            <div className="form-floating-label mt-4">
              <label htmlFor="pittaReason" className="form-label fw-medium">
                Pitta Reason
              </label>
              <input
                type="text"
                className="form-control rounded-3 p-3"
                id="pittaReason"
                name="pittaReason"
                placeholder="Type here..."
                // value={pageData.PrakritiImpact.pitta.reason || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default PrakritiImpact;
