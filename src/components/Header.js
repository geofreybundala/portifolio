import React from 'react'

const Header = () => {
    return (
        <nav className=" navbar d-flex justify-content-between">
            <a>MyPort</a>
            <span>
                <button className="btn-round btn-hire my-2 my-sm-0">Hire me!</button>
            </span>
        </nav>
    )
}

export default Header
