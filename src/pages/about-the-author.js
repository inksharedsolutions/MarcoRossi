import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author_img.jpg'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    Frank, beware, for in reality we never know if the bottom we’ve hit is really the bottom. You might still have a lot in front of you until you really hit the rock bottom, so you will need to be much stronger than you think.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section column" 
                            id="author">

                            <p>
                                Marcos H. N. Rossi is an executive, life-coach, inspirational 
                                writer and teaches Supply Chain Management. He is also the
                                author of the motivational book "Flowers on the Balcony".
                            </p>

                            <p>
                                Marcos lives in Miami, Florida, with his wife Vania and 
                                two sons, Gianlucca and Gianpietro.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Marcos H. N. Rossi
                                </span>
                            </p>
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;