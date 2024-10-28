import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const cart = useSelector((state) => state.product.addToCart)

    return (
        <header>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
                            <li><NavLink className="nav-link" to="/about">About us</NavLink></li>
                            <li><NavLink className="nav-link" to="/service">Services</NavLink></li>
                            <li><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="nav-link" to="/contact">Contact us</NavLink></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 position-relative">
                            <li><Link className="nav-link" to="/"><img src="images/user.svg" /></Link></li>
                            <li>
                                <Link className="nav-link" to="/cart"><img src="images/cart.svg" /></Link>
                                <span className='d-flex justify-content-center fw-bold align-items-center position-absolute top-0 end-0 p-2 text-white text-dark'
                                    style={{ height: '18px', width: "18px", fontSize: '14px' }}>
                                    {cart.length}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Header
