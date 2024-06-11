import React from 'react'
import { Link } from 'react-router-dom'

const Nabvar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-info-subtle">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" href="#">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/services'} className="nav-link active" aria-current="page" href="#">Services</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our process
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Procedure</a></li>
                                <li><a className="dropdown-item" href="#">Sample Music</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to={'/price'} className="dropdown-item" href="#">Pricing</Link></li>
                                <li><Link to={'/contact'} className="dropdown-item" href="#">Contact Us</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Newsletter</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nabvar
