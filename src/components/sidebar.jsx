import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import {
  FaTachometerAlt,
  FaUserMd,
  FaUserInjured,
  FaCalendarCheck,
  FaStethoscope,
  FaLeaf,
  FaTags,
  FaExclamationCircle,
  FaShareAlt,
  FaCogs,
  FaWallet,
  FaUndoAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Ingredients");
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    {
      key: "Dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      children: [
        { label: "Overview", path: "#" },
        { label: "Reports", path: "#" },
      ],
    },
    {
      key: "Doctors",
      label: "Doctors",
      icon: <FaUserMd />,
      children: [
        { label: "Doctors List", path: "#" },
        { label: "Add Doctor", path: "#" },
      ],
    },
    {
      key: "Patients",
      label: "Patients",
      icon: <FaUserInjured />,
      children: [
        { label: "Patients List", path: "#" },
        { label: "Add Patient", path: "#" },
      ],
    },
    {
      key: "Appointments",
      label: "Appointments",
      icon: <FaCalendarCheck />,
      children: [
        { label: "All Appointments", path: "#" },
        { label: "New Appointment", path: "#" },
      ],
    },
    {
      key: "Specialties",
      label: "Specialties",
      icon: <FaStethoscope />,
      children: [
        { label: "Specialties List", path: "#" },
        { label: "Add Specialties", path: "#" },
      ],
    },
    {
      key: "Ingredients",
      label: "Ingredients",
      icon: <FaLeaf />,
      children: [
        { label: "Ingredients List", path: "/" },    
        { label: "Add Ingredients", path: "/ingredients/add" }  
      ],
    },
    {
      key: "Coupons",
      label: "Coupons",
      icon: <FaTags />,
      children: [
        { label: "Coupons List", path: "#" },
        { label: "Add Coupon", path: "#" },
      ],
    },
    {
      key: "Concerns",
      label: "Concerns",
      icon: <FaExclamationCircle />,
      children: [
        { label: "Concerns List", path: "#" },
        { label: "Add Concern", path: "#" },
      ],
    },
    {
      key: "Referral",
      label: "Referral",
      icon: <FaShareAlt />,
      children: [{ label: "Referral Settings", path: "#" }],
    },
    {
      key: "Customization",
      label: "Customization",
      icon: <FaCogs />,
      children: [
        { label: "Theme", path: "#" },
        { label: "Layout", path: "#" },
      ],
    },
    {
      key: "Wallet",
      label: "Wallet",
      icon: <FaWallet />,
      children: [
        { label: "Transactions", path: "#" },
        { label: "Balance", path: "#" },
      ],
    },
    {
      key: "Refund",
      label: "Refund",
      icon: <FaUndoAlt />,
      children: [{ label: "Refund Requests", path: "#" }],
    },
  ];

  return (
    <div
      className="flex-shrink-0 p-3 mt-4 me-0"
      style={{ background: "white" }}
    >
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <span className="fs-5">Menu</span>
      </a>

      <ul className="list-unstyled ps-0">
        {menuItems.map((item) => (
          <li key={item.key} className="mb-1">
            <button
              className={`btn p-1 btn-toggle align-items-center rounded border-0 w-100 text-start d-flex ${
                activeItem === item.key
                  ? "text-primary bg-secondary-subtle"
                  : "text-dark"
              }`}
              onClick={() => toggleMenu(item.key)}
            >
              <span className="me-2">{item.icon}</span>
              {item.label}
              <span className="ms-auto">
                {openMenus[item.key] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {openMenus[item.key] && item.children && (
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.path}
                      className={`d-block p-1 text-decoration-none ${
                        activeItem === child.label
                          ? "text-primary bg-secondary-subtle"
                          : "text-dark"
                      }`}
                      onClick={() => setActiveItem(child.label)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
