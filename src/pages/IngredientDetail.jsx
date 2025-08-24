import HeadingWithIconForDetail from "../components/headingfordetail";
import { useState, } from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function IngredientDetail() {
  const [status, setStatus] = useState('Active');
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>
      {/* Header */}
      <Header />
      <div className="row  ">
        <div className="col col-lg-3">
          <Sidebar />
        </div>
        <div className="col-8 mt-4 ms-4">
          <nav aria-label="breadcrumb ">
            <ol
              className="breadcrumb  "
              style={{
                "--bs-breadcrumb-divider": "'>'"
              }}
            >
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none" >Ingredients</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none" >Ingredient Details</a>
              </li>

            </ol>
          </nav>
          <div className="card p-4 me-4" >
            {/* Heading */}
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h5 fw-bold text-dark mb-0 ">General Information</h2>
              {/* Dropdown menu */}
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ⋮
                </button>

                {menuOpen && (
                  <ul className="dropdown-menu dropdown-menu-end show">
                    <li>
                      <button className="dropdown-item">Edit</button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setStatus(status === "Active" ? "Inactive" : "Active")
                        }
                      >
                        {status === "Active" ? "Inactive" : "Active"}
                      </button>
                    </li>
                  </ul>
                )}
              </div>


            </div>
            {/* Image */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded"
                alt="Ingredient"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>

            {/* Name */}
            <h3 className="h5 fw-bold text-dark mt-3 ">
              Chitrak - Plumbago zeylanica (Sanskrit - चित्रक)
            </h3>

            {/* Description */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Description" />
              <p className="text-muted mt-2">
                Chitrak is a medicinal herb used in Ayurveda for digestion, skin health, and
                reducing blood sugar. It grows in tropical and subtropical regions.
              </p>
            </div>

            {/* Why to use */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Why Chitrak?" />
              <ul className="mt-2">
                <li>Helps lower blood sugar and supports digestion.</li>
                <li>Protects skin and aids wound healing.</li>
                <li>Used in Ayurvedic medicines for indigestion.</li>
              </ul>
            </div >

            {/* Prakriti Impact */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Prakriti Impact" />
              <ul className="mt-2">
                <li>Vata - Balanced - reason</li>
                <li>Kapha - Balanced - reason</li>
                <li>Pitta - Can increase if consumed in excess - reason</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Benefits" />
              <ul className="list-unstyled mt-2">
                <li>🧘 Calms the nervous system & reduces anxiety.</li>
                <li>💪 Helps in weight loss & cholesterol management.</li>
                <li>🩸 Controls diabetes by lowering blood sugar levels.</li>
              </ul>
            </div>

            {/* Properties */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Properties" />
              <ul className="mt-2">
                <li>Rasa: Katu (Pungent)</li>
                <li>Veerya: Ushna (Hot)</li>
                <li>Guna: Laghu (Light), Ruksha (Dry), Tikshna (Sharp)</li>
              </ul>
            </div>

            {/* Formulations */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Formulations" />
              <ul className="list-unstyled mt-2">
                <li>🌿 Chitrak Haritaki</li>
                <li>🌿 Chitrakadi Vati</li>
                <li>🌿 Kalyanagulam</li>
                <li>🌿 Chitrakadi Churna</li>
              </ul>
            </div>

            {/* Therapeutic Uses */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Therapeutic Uses" />
              <ul className="mt-2">
                <li> Indigestion, loss of appetite, bloating</li>
                <li> Fever & inflammation</li>
                <li> Rheumatoid arthritis & joint pain</li>
                <li> Skin disingredients like eczema, psoriasis</li>
                <li> Anemia & liver disingredients</li>
              </ul>
            </div>

            {/* Plant Parts */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Plant Parts and Its Purpose" />

              <ul className="mt-2">
                <li>Root – Digestion, skin conditions, diabetes.</li>
                <li>Bark – Helps in weight loss & metabolism.</li>
                <li>Leaves – Used externally for wounds.</li>
              </ul>
            </div>

            {/* Best Combination */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Best Combined With" />
              <p className="mt-2">Pippali, Haritakai, Amla, Giloy, Punarnava</p>
            </div>

            {/* Geographical Locations */}
            <div className="mt-3">
              <HeadingWithIconForDetail title="Geographical Locations" />
              <p className="mt-2">
                Native to tropical and subtropical regions worldwide including India
                and Sri Lanka.
              </p>
            </div>
          </div >
        </div >

      </div>


    </>
  )
}

export default IngredientDetail;
