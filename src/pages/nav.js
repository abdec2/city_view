import React from 'react';
import logo from './assets/images/logo.png'
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark1 shadow-sm fixed-top">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="" width="40%" />
                    </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                            data-target="#navbar4">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbar4">
                            <ul className="navbar-nav mr-auto pl-lg-4">
                                <li className="nav-item px-lg-2 active"> <a className="nav-link" href="#page-top"> <span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="fas fa-home"></i></span> Home</a> </li>
                                <li className="nav-item px-lg-2"> <a className="nav-link" href="#about"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="fas fa-spa"></i></span> About</a> </li>
                                <li className="nav-item px-lg-2"> <a className="nav-link" href="#services"><span
                                    className="d-inline-block d-lg-none icon-width"><i
                                        className="far fa-user"></i></span> Services</a> </li>

                                <li className="nav-item px-lg-2"> <a className="nav-link" href="#services"><span
                                className="d-inline-block d-lg-none icon-width"><i
                                    className="far fa-envelope"></i></span> Features</a> </li>

                                <li className="nav-item px-lg-2"> <a className="nav-link" href="#contact"><span
                                className="d-inline-block d-lg-none icon-width"><i
                                    className="far fa-envelope"></i></span> Contact</a> </li>
                            </ul>
                        <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item"> <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/><span className="d-lg-none ml-3">Instagram</span>
                            </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/><span className="d-lg-none ml-3">Youtube</span>
                            </a> </li>
                        </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

