import '../App.css';
import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

function Benefits({ pageData, setPageData }) {
  // local UI state for emoji picker rows
  const [benefits, setBenefits] = useState(
    [
      { emoji: "", benefit: "", showPicker: false },
      { emoji: "", benefit: "", showPicker: false },
      { emoji: "", benefit: "", showPicker: false }
    ]
  );

  // keep parent (pageData) in sync whenever local benefits changes
  useEffect(() => {
    setPageData((prev) => ({ ...prev, benefits }));
  }, [benefits, setPageData]);

  // Handle emoji selection
  const handleEmojiClick = (emojiObject, index) => {
    const updated = [...benefits];
    updated[index].emoji = emojiObject.emoji;
    updated[index].showPicker = false;
    setBenefits(updated);
  };

  // Handle benefit text change
  const handleChange = (e, index) => {
    const updated = [...benefits];
    updated[index].benefit = e.target.value;
    setBenefits(updated);
  };

  // Toggle picker visibility
  const togglePicker = (index) => {
    const updated = [...benefits];
    updated[index].showPicker = !updated[index].showPicker;
    setBenefits(updated);
  };

  // Add a new row
  const addRow = () => {
    setBenefits([...benefits, { emoji: "", benefit: "", showPicker: false }]);
  };

  // Delete row
  const deleteRow = (index) => {
    const updated = [...benefits];
    updated.splice(index, 1);
    setBenefits(updated);
  };

  return (
    // <div className="container my-5">
      <div className="px-4 py-3">
        <h1 className="h5 fw-bold text-dark mb-4">Benefits</h1>

        {/* Dynamic Rows */}
        {benefits.map((item, index) => (
          <div className="row align-items-start mb-3" key={index}>
            {/* Emoji input */}
            <div className="col-md-4 col-sm-4 col-12 mb-2 mb-md-0 position-relative">
              <div
                onClick={() => togglePicker(index)}
                className="w-100 p-2 d-flex align-items-center justify-content-center"
                style={{
                  background: "#EAF2EA",
                  border: "2px dashed #9DB29D",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                <span>{item.emoji || "Add Emoji"}</span>
              </div>

              {item.showPicker && (
                <div className="position-absolute" style={{ zIndex: 1000 }}>
                  <EmojiPicker
                    onEmojiClick={(emojiObj) => handleEmojiClick(emojiObj, index)}
                  />
                </div>
              )}
            </div>

            {/* Benefit description */}
            <div className="col-md-7 col-12">
              <input
                type="text"
                className="form-control rounded-3 px-2 py-2"
                placeholder="lorem ipsum dolor sit amet"
                value={item.benefit}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            {/* Delete button */}
            <div className="col-md-1 col-12 d-flex align-items-center mt-2 mt-md-0">
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => deleteRow(index)}
                disabled={benefits.length === 1}
              >
                ✖
              </button>
            </div>
          </div>
        ))}

        {/* Add button */}
        <div className="mt-3">
          <button
            type="button"
            className="btn px-3 py-1 me-3 rounded text-success "
            onClick={addRow}
          >
            + Add Another Item
          </button>
        </div>
      </div>
    // </div>
  );
}

export default Benefits;
