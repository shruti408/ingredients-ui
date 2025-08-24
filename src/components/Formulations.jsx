import '../App.css';
import { useState } from "react";

function Formulations({ pageData, setPageData }) {
  const [rows, setRows] = useState( [{ image: null, description: "" }, { image: null, description: "" }, { image: null, description: "" }, { image: null, description: "" }]);

  // Handle file upload
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const updated = [...rows];
    updated[index].image = file;
    setRows(updated);
    setPageData((prev) => ({
      ...prev,
      formulations: updated,
    }));
  };

  // Handle description input
  const handleDescriptionChange = (e, index) => {
    const updated = [...rows];
    updated[index].description = e.target.value;
    setRows(updated);
    setPageData((prev) => ({
      ...prev,
      formulations: updated,
    }));
  };

  // Add new row
  const addRow = () => {
    setRows([...rows, { image: null, description: "" }]);
  };

  // Delete row
  const deleteRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  return (
    <>
      {/* formulations*/}
      <div className=" px-4 pt-2">

        <h1 className="h5 fw-bold text-dark mb-4">Important Formulations</h1>
        {rows.map((row, index) => (
          <div
            className="row align-items-start mb-3"
            key={index}
            style={{ position: "relative" }}
          >
            {/* Image Upload Styled */}
            <div className="col-md-4 col-12 mb-2 mb-md-0">
              <label
                htmlFor={`imageUpload-${index}`}
                className="p-2 px-3 w-100 text-center"
                style={{
                  background: "#EAF2EA",
                  border: "2px dashed #9DB29D",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "inline-block",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "8px" }}
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="#0C140C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
                    stroke="#0C140C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14.9997L17.914 11.9137C17.5389 11.5388 17.0303 11.3281 16.5 11.3281C15.9697 11.3281 15.4611 11.5388 15.086 11.9137L6 20.9997"
                    stroke="#0C140C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{row.image ? row.image.name : "Upload icon"}</span>
              </label>
              <input
                type="file"
                accept="image/*"
                id={`imageUpload-${index}`}
                className="d-none"
                onChange={(e) => handleFileChange(e, index)}
              />
              {row.image && (
                <div className="mt-2 text-center">
                  <img
                    src={URL.createObjectURL(row.image)}
                    alt="preview"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>

            {/* Description input */}
            <div className="col-md-6 col-10">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="lorem ipsum dolor sit amet "
                value={row.description}
                onChange={(e) => handleDescriptionChange(e, index)}
              />
            </div>

            {/* Delete button */}
            <div className="col-md-2 col-2 d-flex align-items-center">
              <button
                className="btn "
                onClick={() => deleteRow(index)}
                disabled={rows.length === 1}
              >
                ✖
              </button>
            </div>
          </div>
        ))}

        {/* Add Row button */}
        <div>
          <button
            type="button"
            // id="save-btn"
            className="btn px-3 py-1 me-3 rounded text-success "
            onClick={addRow}
          >
            Add Another item
          </button>
        </div>
      </div>

    </>
  )
}

export default Formulations;
