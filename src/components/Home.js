import React from 'react'

const Home = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href>MyPort</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href>Work</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link" href>Blog</a>
                </li> 
                <li>
                    <button class="btn-round btn-hire my-2 my-sm-0" >Hire Me!</button>
                </li>
                </ul>
            </div>
        </nav>
)
}

export default Home
