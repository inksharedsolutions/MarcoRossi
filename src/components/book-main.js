import React from 'react'
import Book from '../../static/book/two_perspective_book.png'
import { Link } from 'gatsby'

const MainBook = ()=>{
    return(
        <>
            <section className="section-main-book">
                <div className="book-grid-columns">

                    <div className="book-contents">
                        <h1> Bread & Joy</h1>
                        <span>The Paths of Plenitude</span>

                        <p>
                            War looms in the horizon in England, and Frank,
                            a troubled young man, feels lost and unprepared, 
                            until an unconventional mentor steps in and begins 
                            to prepare him for the difficult life of a soldier.
                        </p>

                        <button className="button-wraps">
                            <Link to="/about-the-book">
                                Read More
                            </Link>
                        </button>
                    </div>

                     <div className="book-img-wrapper">
                            <img src={Book}/>
                     </div>
                </div>
            </section>
        </>
    )
}

export default MainBook