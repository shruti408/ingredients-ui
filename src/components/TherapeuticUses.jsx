import { useState } from "react";
import "../App.css";

function TherapeuticUses({pageData, setPageData}) {
  const [rows, setRows] = useState( [{ description: "" }, { description: "" }, { description: "" }]);

  // add new row
  const addRow = () => {
    setRows([...rows, { description: "" }]);
  };

  // delete a row
  const deleteRow = (index) => {
    const updated = [...rows];
    updated.splice(index, 1);
    setRows(updated);
    setPageData((prev) => ({ ...prev, uses: updated }));
  };

  // handle textarea change
  const handleChange = (index, value) => {
    const updated = [...rows];
    updated[index].description = value;
    setRows(updated);
    setPageData((prev) => ({ ...prev, uses: updated }));
  };

  return (
    <>
      {/* <div className="container my-5"> */}
        <div className=" px-4 py-3">
          <h1 className="h5 fw-bold text-dark mb-4">Therapeutic Uses</h1>

          {/* dynamic textareas */}
          {rows.map((row, index) => (
            <div className="row mb-3" key={index}>
                <div className="col-11 mt-2">
              <textarea
                className="form-control rounded-3"
                rows={1}
                placeholder="description"
                value={row.description}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              </div>
              <div className="col-1 mt-2">
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

          {/* Add button */}
          <div>
            <button
              type="button"
              className="btn text-success px-3 py-1 rounded"
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

export default TherapeuticUses;
