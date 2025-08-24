import { useState } from "react";
function HeadingWithIconForDetail({ title }) {
    const [status, setStatus] = useState('Active');
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-semibold mb-0">{title} {status === "Active" ? "✅" : "❌"}</h5>
                {/* Status tick sign */}
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
        </>
    )
};
export default HeadingWithIconForDetail;