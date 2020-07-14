import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_inner.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span>
                                                The Paths of
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-o">
                                             Plenitude
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                        “Bread & Joy,” explores the hardship, failures and triumphs of 
                                        an extraordinary young man who embarks on a journey
                                        of self-development and spiritual discovery. 
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;