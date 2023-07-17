import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar fixed-top navbar-expand-lg bg-primary"data-bs-theme="dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">DailyNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/business" className="nav-link active">Business</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/entertainment" className="nav-link active">Entertainment</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/" className="nav-link active">General</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/health" className="nav-link active">Health</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/science" className="nav-link active">Science</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/sports" className="nav-link active">Sports</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    <Link to="/technology" className="nav-link active">Technology</Link>
                                </li>
                                <li className='nav-item'>
                                    <a href="#footer" className="nav-link active">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
