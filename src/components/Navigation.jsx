import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
            end
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/new-customer"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Create Customer Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-work-order"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Create Work Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-invoice"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Create Invoice
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-statement"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Create Statement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search-customer"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Search Customer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search-workorder"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Search Work Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search-invoice"
            className={({ isActive }) => {
              return isActive ? "active" : undefined;
            }}
          >
            Search Invoice
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
