import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar">
            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center"
                to={'/'}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Home Page</div>
            </NavLink>
            <li className="nav-item active">
                <NavLink className="nav-link" to={'/'}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Bảng mục</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link collapsed" to={"/word"}>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Từ điển</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default Sidebar;