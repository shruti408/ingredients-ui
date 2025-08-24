 import { useState } from "react";
 
function OtherStep({ingredientData, setIngredientData}) {
    const [pageData, setPageData] = useState({
        plant: [[{ part: "", description: "" }],],
        bestCombinedWith: "",
        geographicalLocation: ""
       });
         const rows = pageData?.plant || [{ part: "", description: "" }];

  // handle select & input changes
  const handleChange = (index, field, value) => {
    const updated = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setPageData((prev) => ({ ...prev, plant: updated }));
    setIngredientData({...ingredientData, plant: updated});
  };

  // add new row
  const addRow = () => {
    setPageData((prev) => ({
      ...prev,
      plant: [...rows, { part: "", description: "" }],
    }));
  };

  // delete row
  const deleteRow = (index) => {
    if (rows.length === 1) return; // keep at least one row
    const updated = rows.filter((_, i) => i !== index);
    setPageData((prev) => ({ ...prev, plant: updated }));
  };
  return (
    <>
     
      <div className="container my-5">
      <div className="card rounded-4 p-4 p-md-5">
        <h1 className="h5 fw-bold text-dark mb-4">
          Plant Parts and Its Purpose
        </h1>

        {/* dynamic form rows */}
        {rows.map((row, index) => (
          <div className="row mb-3 g-4 align-items-end" key={index}>
            {/* Plant Part */}
            <div className="col-12 col-md-5">
              <div className="form-floating-label">
                <label
                  htmlFor={`part-${index}`}
                  className="form-label fw-medium"
                >
                  Plant Part <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select rounded-3 pt-3"
                  id={`part-${index}`}
                  value={row.part}
                  onChange={(e) =>
                    handleChange(index, "part", e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="Leaves">Leaves</option>
                  <option value="Flowers">Flowers</option>
                  <option value="Seeds">Seeds</option>
                  <option value="Roots">Roots</option>
                  <option value="Bark">Bark</option>
                  <option value="Wood">Wood</option>
                  <option value="Oil">Essential Oil</option>
                  <option value="Resin">Resin / Exudate</option>
                  <option value="Rhizomes">Rhizomes</option>
                  <option value="Extract">Juice / Extract</option>
                  <option value="Fruit">Fruit</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="col-12 col-md-5">
              <div className="form-floating-label">
                <label
                  htmlFor={`desc-${index}`}
                  className="form-label fw-medium"
                >
                  Description <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control rounded-3 pt-3"
                  id={`desc-${index}`}
                  placeholder="Type here"
                  value={row.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Delete button */}
            <div className="col-12 col-md-2 d-flex gap-2">
              <button
                type="button"
                className="btn"
                disabled={rows.length === 1}
                onClick={() => deleteRow(index)}
              >
                ✖
              </button>
            </div>
          </div>
        ))}

        <div className="col-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={addRow}
          >
            + Add
          </button>
        </div>

        {/* table preview */}
        <div className="card mt-4">
          <table className="table table-borderless mb-0">
            <thead className="border-bottom">
              <tr>
                <th scope="col-3" className="fw-medium">
                  Plant Part
                </th>
                <th scope="col-9" className="fw-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="fw-normal">{row.part || "-"}</td>
                  <td>{row.description || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* extra textareas */}
        <div className="mb-4 mt-4">
          <div className="form-floating-label">
            <label
              htmlFor="ingredient-combined"
              className="form-label fw-medium"
            >
              Best Combined With <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control rounded-3 pt-3"
              id="ingredient-combined"
              rows={1}
              placeholder="description"
              value={pageData?.bestCombinedWith || ""}
              onChange={(e) =>
                setPageData((prev) => ({
                  ...prev,
                  bestCombinedWith: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="form-floating-label">
            <label
              htmlFor="ingredient-location"
              className="form-label fw-medium"
            >
              Geographic Locations <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control rounded-3 pt-3"
              id="ingredient-location"
              rows={1}
              placeholder="description"
              value={pageData?.locations || ""}
              onChange={(e) =>
                setPageData((prev) => ({
                  ...prev,
                  locations: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
         
    </>
  )
}
export default OtherStep;