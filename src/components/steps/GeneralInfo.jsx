import { useState } from "react";
import React, { useRef } from "react";
function GeneralInfoStep({ ingredientData, setIngredientData }) {

  // Local state for this page
  const [pageData, setPageData] = useState({
    ingredientName: ingredientData.ingredientName || "",
    scientificName: ingredientData.scientificName || "",
    sanskritName: ingredientData.sanskritName || "",
    description: ingredientData.description || ""
    // ingredientImage: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPageData((prev) => ({ ...prev, [name]: value }));
  };

  // handle file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPageData((prev) => ({
        ...prev,
        ingredientImage: { file, preview: previewUrl }
      }));
    }
    setIngredientData({ ...ingredientData, ingredientImage: file });
  };


  return (
    <>

      <div className="card rounded-4 p-5 pb-2">
        <h1 className="h5 fw-bold text-dark mb-4">General Information</h1>

        {/* Row 1 - names*/}
        <div className="row mb-4 g-4">
          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="ingredient-name" className="form-label fw-medium">
                Ingredient Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="ingredient-name"
                name="ingredientName"
                className="form-control rounded-3 pt-3"
                placeholder="Type here..."
                value={pageData.ingredientName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="scientific-name" className="form-label fw-medium">
                Scientific Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="scientific-name"
                name="scientificName"
                className="form-control rounded-3 pt-3"
                placeholder="Type here..."
                value={pageData.scientificName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="form-floating-label">
              <label htmlFor="sanskrit-name" className="form-label fw-medium">
                Sanskrit Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="sanskrit-name"
                name="sanskritName"
                className="form-control rounded-3 pt-3"
                placeholder="Type here..."
                value={pageData.sanskritName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <div className="form-floating-label">
            <label htmlFor="ingredient-description" className="form-label fw-medium">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              id="ingredient-description"
              name="description"
              className="form-control rounded-3 pt-3"
              rows={1}
              placeholder="Enter description..."
              value={pageData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Image Preview as Upload */}
        <div className="row mb-5">
          <div className="col-12 col-md-6 position-relative">
            {pageData.ingredientImage ? (
              <div className="position-relative">
                <img
                  src={pageData.ingredientImage.preview || pageData.ingredientImage}
                  alt="Preview"
                  className="img-fluid rounded-3 "
                  style={{ border: "2px dashed #9DB29D", borderRadius: "12px", cursor: "pointer" }}
                  onClick={() => document.getElementById("imageUpload").click()}
                />
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-pill position-absolute top-0 end-0 m-2 "
                  style={{ zIndex: 10, background: "#9DB29D", }}
                  onClick={() => setPageData((prev) => ({ ...prev, ingredientImage: null }))}
                >
                  ×
                </button>
              </div>
            ) : (

              <div
                onClick={() => fileInputRef.current.click()}
                className="d-flex flex-column align-items-center justify-content-center  "
                style={{
                  height: "200px",
                  background: "#EAF2EA",
                  border: "2px dashed #9DB29D",
                  borderRadius: "12px",
                  cursor: "pointer"

                }}
              >

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#0C140C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z" stroke="#0C140C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 14.9997L17.914 11.9137C17.5389 11.5388 17.0303 11.3281 16.5 11.3281C15.9697 11.3281 15.4611 11.5388 15.086 11.9137L6 20.9997" stroke="#0C140C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="upload-text"> Upload Image </div>
              </div>

            )}
            <input
              name="ingredientImage"
              type="file"
              id="imageUpload"
              className="d-none"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
            />

          </div>
        </div>
      </div>



    </>
  )
}

export default GeneralInfoStep;
 
