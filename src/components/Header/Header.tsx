import React from 'react'

const Header = () => {
    return (
        <nav className="navbar d-flex justify-content-between rounded-circle">
            <button className='btn btn-round p-blue-btn'>
                GB
            </button>
            <span>
                <button className="btn-round btn-hire my-2 my-sm-0">Projects</button>
            </span>
        </nav>
    )
}

export default Header
