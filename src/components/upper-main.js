import React,{useEffect, useRef, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img.jpg'

const UpperMain =()=>{


    const elemBanner = useRef(null);
    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-image"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Marcos H. N. Rossi</h1>
                                <span>Author & Writer</span>

                                <p>
                                    Italian descendant and Brazilian born living in the US since 2004,
                                    Marcos is a citizen of the world. His deep interests in human nature 
                                    lead him to get certified as coach. Spiritualistic, Marcos has studied
                                    almost all religions. He also loves history, using his free time reading 
                                    and watching documentaries.
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