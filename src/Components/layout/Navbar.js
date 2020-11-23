import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark md-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text white text-lg brand-text" href="/#">
                        <img className="header_logo" src="https://bollyy.com/wp-content/uploads/2020/05/imdb1-750x430.png" alt="" />  
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                     <li className="tv_icon_title2 nav-item d-inline-block mr-4">
                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="tv_icon2 bi bi-badge-4k-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg">
                    <path d="M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z"/>
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715l.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z"/>
                    </svg>IMDBPRO                       </li>   
                     <li className="tv_icon_title nav-item d-inline-block mr-4">   
                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="tv_icon bi bi-bookmark-plus-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"  d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4.5 4.5a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"/>
                    </svg>Watchlist                        
					</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
