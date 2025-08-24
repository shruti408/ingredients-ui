import { useState, useEffect } from "react";
import "../App.css";

function WhyToUse({ pageData, setPageData }) {
  const [rows, setRows] = useState(pageData?.WhyToUse || ["", "", ""]);

  // Keep parent state synced whenever rows change
  useEffect(() => {
    setPageData((prev) => ({ ...prev, whyToUse: rows }));
  }, [rows, setPageData]);

  // add new row 
  const addRow = () => {
    setRows([...rows, ""]);
  };

  // delete row
  const deleteRow = (index) => {
    const updated = [...rows];
    updated.splice(index, 1);
    setRows(updated);
     setPageData((prev) => ({ ...prev, whyToUse: updated }));
  };

  // handle change
  const handleChange = (index, e) => {
    const updated = [...rows];
    updated[index] = e.target.value;
    setRows(updated);
    setPageData((prev) => ({ ...prev, whyToUse: updated }));
  };

  return (
    <>
      {/* <div className="container my-5"> */}
        <div className="px-4 pt-4">
          <h1 className="h5 fw-bold text-dark mb-4">Why to use</h1>

          {/* dynamic textareas */}
          {rows.map((row, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-11 mt-2">
                <textarea
                  name="whyToUse"
                  className="form-control rounded-3 "
                  rows={1}
                  placeholder="lorem ipsum dolor sit amet"
                  value={row || ""}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="col-1 mt-3">
                <button
                  type="button"
                  className="btn  btn-sm"
                  onClick={() => deleteRow(index)}
                  disabled={rows.length === 1}
                >
                  ✖
                </button>
              </div>
            </div>
          ))}

          {/* add button */}
          <div>
            <button
              type="button"
              className="btn px-3 py-1 me-3 rounded text-success "
              onClick={addRow}
            >
              + Add Another Item
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default WhyToUse;
