import { Link } from "react-router-dom";

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src="/images/logo.png" alt="Futbolismo" />
                </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Futbolismo</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Actions</div>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/last-pitch">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Ultima Partido</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Usuarios</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/pitches">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Partidos</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default SideBar;