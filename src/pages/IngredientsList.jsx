import { useState,   } from "react";
import { FaDownload, FaSort, FaLeaf } from "react-icons/fa"; // Icons
 import { Link } from 'react-router-dom';
 import Header from "../components/header";
import Sidebar from "../components/sidebar";
 

function IngredientsList() {
 const initialRows = [
    { name: "Tomato", description: "Fresh red tomato", status: "active" },
    { name: "Onion", description: "Red onion", status: "active" },
    { name: "Garlic", description: "Organic garlic", status: "inactive" },
    { name: "Carrot", description: "Orange carrot", status: "active" },
    { name: "Potato", description: "Fresh potato", status: "inactive" },
    { name: "Spinach", description: "Green leafy", status: "active" },
    { name: "Cucumber", description: "Fresh cucumber", status: "active" },
  ];
  const [rows, setRows ] = useState(initialRows);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

     // Filter rows by search
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort rows by name
  const sortedRows = [...filteredRows].sort((a, b) =>
    sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedRows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(sortedRows.length / rowsPerPage);

  const handleDownload = () => {
    const csv = sortedRows
      .map((r) => `${r.name},${r.description},${r.status}`)
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ingredients.csv";
    link.click();
  };

  const handleSort = () => setSortAsc(!sortAsc);

  return (
    <>
    
      {/* Header */}
      <Header/>
      <div className="row">
        <div className="col col-lg-3 ">
          <Sidebar/>
         </div>
         <div className="col-8 mt-4 ms-3">
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
           
        </ol>
      </nav>

          <div className="card mt-4 p-3 ms-0 borderRadius-8">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <h5 className="mb-0">Ingredient List</h5>
          <input
            type="text"
            placeholder="Search..."
            className="form-control form-control-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-light btn-sm">+</button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary btn-sm" onClick={handleDownload}>
            <FaDownload />
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleSort}>
            <FaSort />
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="table table-borderless mb-0">
        <thead className="border-bottom">
          <tr>
            <th scope="col-5">Ingredients</th>
            <th scope="col-9">Description</th>
            <th scope="col-9">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td className="fw-normal text-success d-flex align-items-center gap-2">
                <input type="checkbox" />
                <FaLeaf className="text-success" />
                {/* Make name clickable */}
                <Link to={`/ingredients/${row.name}`} className="text-decoration-none text-success">
                  {row.name}
                </Link>
              </td>
              <td>{row.description}</td>
              <td className={`fw-bold ${row.status === "active" ? "text-success" : "text-danger"}`}>
                {row.status}
              </td>
            </tr>
          ))} 
        </tbody>
      </table>

      {/* Pagination (right-aligned) */}
      <nav aria-label="Page navigation" className="mt-3">
        <ul className="pagination justify-content-end bg-white p-2 rounded">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>



         </div>

      </div>
             </>
       );
};

export default IngredientsList;
