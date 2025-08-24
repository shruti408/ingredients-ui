 
import '../App.css';
function Breadcrumb() {
  return (
    <>
  
      <nav aria-label="breadcrumb ">
        <ol
          className="breadcrumb  "
          style={{
            "--bs-breadcrumb-divider": "'>'"
          }}
        >
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none" >Ingredient</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Ingredient
          </li>
        </ol>
      </nav>

    </>

  );
}

export default Breadcrumb;
