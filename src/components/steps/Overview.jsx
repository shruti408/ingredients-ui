import HeadingWithIcon from "../HeadingWithIcon";
 function OverviewStep({ ingredientData }) {
  
  return (

    <>
      <div className="container mt-4">
        <div className="card p-4"  >
          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="h5 fw-bold text-dark mb-0 ">General Information</h2>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#2E37A4" fill-opacity="0.05" />
              <path opacity="0.4" d="M10.8082 15.4412L12.7735 13.469C14.1896 12.048 14.7446 11.2836 15.5114 11.5538C16.4675 11.8908 16.1528 14.0169 16.1528 14.7347C17.6393 14.7347 19.1848 14.6026 20.6502 14.8779C25.4874 15.7866 27 19.7153 27 24C25.6309 23.0302 24.2632 21.997 22.6177 21.5476C20.5636 20.9865 18.2696 21.2542 16.1528 21.2542C16.1528 21.972 16.4675 24.0982 15.5114 24.4351C14.6425 24.7413 14.1896 23.9409 12.7735 22.5199L10.8082 20.5477C9.60275 19.338 9 18.7332 9 17.9945C9 17.2558 9.60275 16.6509 10.8082 15.4412Z" fill="#3A643C" />
              <path d="M10.8082 15.4412L12.7735 13.469C14.1896 12.048 14.7446 11.2836 15.5114 11.5538C16.4675 11.8908 16.1528 14.0169 16.1528 14.7347C17.6393 14.7347 19.1848 14.6026 20.6502 14.8779C25.4874 15.7866 27 19.7153 27 24C25.6309 23.0302 24.2632 21.997 22.6177 21.5476C20.5636 20.9865 18.2696 21.2542 16.1528 21.2542C16.1528 21.972 16.4675 24.0982 15.5114 24.4351C14.6425 24.7413 14.1896 23.9409 12.7735 22.5199L10.8082 20.5477C9.60275 19.338 9 18.7332 9 17.9945C9 17.2558 9.60275 16.6509 10.8082 15.4412Z" stroke="#3A643C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
          {/* Image */}
          <div className="text-center">
            <img
              src={ingredientData.ingredientImage}
              // src="https://via.placeholder.com/300"
              className="img-fluid rounded"
              alt="Ingredient"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Name */}
          <h3 className="h5 fw-bold text-dark mt-3 ">
            {ingredientData.ingredientName} - {ingredientData.scientificName} (Sanskrit - {ingredientData.sanskritName})
          </h3>
          {/* <h3 className="h5 fw-bold text-dark mt-3 ">
            Chitrak - Plumbago zeylanica (Sanskrit - चित्रक)
          </h3> */}

          {/* Description */}
          <div className="mt-3">
            <HeadingWithIcon title="Description" />
            <p className="text-muted mt-2">
           {ingredientData.description} </p>
            {/* <p className="text-muted mt-2">
              Chitrak is a medicinal herb used in Ayurveda for digestion, skin health, and
              reducing blood sugar. It grows in tropical and subtropical regions.
            </p> */}
          </div>

          {/* Why to use */}
          <div className="mt-3">
            <HeadingWithIcon title="Why Chitrak?" />
            <ul className="mt-2">
              <li>Helps lower blood sugar and supports digestion.</li>
              <li>Protects skin and aids wound healing.</li>
              <li>Used in Ayurvedic medicines for indigestion.</li>
            </ul>
          </div >

          {/* Prakriti Impact */}
          <div className="mt-3">
            <HeadingWithIcon title="Prakriti Impact" />
            <ul className="mt-2">
              <li>Vata - Balanced - reason</li>
              <li>Kapha - Balanced - reason</li>
              <li>Pitta - Can increase if consumed in excess - reason</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="mt-3">
            <HeadingWithIcon title="Benefits" />
            <ul className="list-unstyled mt-2">
              <li>🧘 Calms the nervous system & reduces anxiety.</li>
              <li>💪 Helps in weight loss & cholesterol management.</li>
              <li>🩸 Controls diabetes by lowering blood sugar levels.</li>
            </ul>
          </div>

          {/* Properties */}
          <div className="mt-3">
            <HeadingWithIcon title="Properties" />
            <ul className="mt-2">
              <li>Rasa: Katu (Pungent)</li>
              <li>Veerya: Ushna (Hot)</li>
              <li>Guna: Laghu (Light), Ruksha (Dry), Tikshna (Sharp)</li>
            </ul>
          </div>

          {/* Formulations */}
          <div className="mt-3">
            <HeadingWithIcon title="Formulations" />
            <ul className="list-unstyled mt-2">
              <li>🌿 Chitrak Haritaki</li>
              <li>🌿 Chitrakadi Vati</li>
              <li>🌿 Kalyanagulam</li>
              <li>🌿 Chitrakadi Churna</li>
            </ul>
          </div>

          {/* Therapeutic Uses */}
          <div className="mt-3">
            <HeadingWithIcon title="Therapeutic Uses" />
            <ul className="mt-2">
              <li> Indigestion, loss of appetite, bloating</li>
              <li> Fever & inflammation</li>
              <li> Rheumatoid arthritis & joint pain</li>
              <li> Skin disorders like eczema, psoriasis</li>
              <li> Anemia & liver disorders</li>
            </ul>
          </div>

          {/* Plant Parts */}
          <div className="mt-3">
            <HeadingWithIcon title="Plant Parts and Its Purpose" />

            <ul className="mt-2">
              <li>Root – Digestion, skin conditions, diabetes.</li>
              <li>Bark – Helps in weight loss & metabolism.</li>
              <li>Leaves – Used externally for wounds.</li>
            </ul>
          </div>

          {/* Best Combination */}
          <div className="mt-3">
            <HeadingWithIcon title="Best Combined With" />
            <p className="mt-2">Pippali, Haritakai, Amla, Giloy, Punarnava</p>
          </div>

          {/* Geographical Locations */}
          <div className="mt-3">
            <HeadingWithIcon title="Geographical Locations" />
            <p className="mt-2">
              Native to tropical and subtropical regions worldwide including India
              and Sri Lanka.
            </p>
          </div>
        </div >
      </div >


    </>
  )
}

export default OverviewStep;
 
