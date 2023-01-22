import React from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle';

const Navbar = (props) => {

    let colorMode = (props.mode==="light")?"light":"dark";
    return (
        <nav className={`navbar navbar-expand-lg text-info ${(props.mode==="light")?"bg-dark":"bg-secondary"} .bg-secondary.bg-gradient`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://i.pinimg.com/originals/0b/4d/a2/0b4da20897087a09edb6abd220eb31af.gif" alt="" width="50" height="50" />
                    {/* https://i.pinimg.com/originals/57/8a/d6/578ad68d8a9937c7da23c2d3928588ec.gif */}
                </a>
                <a className={`navbar-brand text-${colorMode}`} href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active text-${colorMode}`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-${colorMode}`} href="/">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle text-${colorMode}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Utilities
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className={`dropdown-item text-dark`} href="/">Text Generator</a></li>
                                <li><a className={`dropdown-item text-dark`} href="/">Text Magic</a></li>
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className={`btn ${(props.mode==="light")?"btn-outline-success":"btn-outline-info"}`} type="submit">Search</button>
                    </form>
                    {/* <div class="form-check form-switch mx-2">
                    <label class="form-check-label" htmlFor="flexSwitchCheckChecked">Light</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={alert("Hello")}/>
                        <label class="form-check-label" htmlFor="flexSwitchCheckChecked">Dark</label>
                    </div> */}
                    <Toggle mode={props.mode} toggleTheme={props.toggleTheme}/>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Set the title here'
};

export default Navbar