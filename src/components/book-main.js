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
                            Marcos H. N. Rossi is an executive, life-coach,
                            inspirational writer and teaches Supply Chain
                            Management. He is also the author of
                            the motivational book "Flowers on the Balcony".
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