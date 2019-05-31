import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { GC_USER_ID, GC_AUTH_TOKEN } from './constants'

class Header extends Component {

    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                            userId &&
                            <li className="nav-item">
                                <Link to="/create" className="nav-link" href="#">New</Link>
                            </li>
                        }
                        <li className="nav-item">
                            {
                                userId ?
                                <div className='nav-link' onClick={() => {
                                    localStorage.removeItem(GC_USER_ID)
                                    localStorage.removeItem(GC_AUTH_TOKEN)
                                    this.props.history.push(`/`)
                                }}>logout</div>
                                :
                                <Link to='/login' className="nav-link">login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default withRouter(Header)