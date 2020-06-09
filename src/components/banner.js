import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">



                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span><span className="f-letters">T</span>he Paths of</span> 
                                        <span>Plenitude</span>
                                    </h1>
                                    <p>
                                        World War II surprises Frank in drastic ways, 
                                        forcing him to return to his origins in search of a
                                        new beginning. What he finds there changes him
                                        forever.
                                    </p>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper">
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