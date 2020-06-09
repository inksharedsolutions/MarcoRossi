import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img.jpg'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className="img-wrapper-form">
                            <img src={AuthorImg} alt="author-image"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Marcos Rossi</h1>
                                <span>Author & Writer</span>

                                <p>
                                    Marcos H. N. Rossi is an executive, life-coach,
                                    inspirational writer and teaches Supply Chain
                                    Management. He is also the author of
                                    the motivational book "Flowers on the Balcony".
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain