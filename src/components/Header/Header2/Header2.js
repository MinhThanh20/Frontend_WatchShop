import React from "react";
import { NavLink } from "react-router-dom";
function Header2() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto " style={{marginLeft:'330px'}}>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active ms-5" to="/nam">
                                ĐỒNG HỒ NAM
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active ms-5" to="/nu">
                                ĐỒNG HỒ NỮ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active ms-5" to="/doi">
                                ĐỒNG HỒ ĐÔI
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active ms-5" to="/phukien">
                                PHỤ KIỆN 
                            </NavLink>
                        </li>
                    </ul>
                    {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
            
        </nav>
        
    )
}
export default Header2