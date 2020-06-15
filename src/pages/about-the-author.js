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
				    <section className="body-author-contents">

                        <div className="heading-quote">
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
                            className="article-section" 
                            id="author">

                            <p>
                                Italian descendant and Brazilian born, living in the US since 
                                2004 after being “imported” by a global corporation, Marcos 
                                is what one may call a citizen of the world, having visited 
                                either on work or pleasure more than forty countries in five 
                                continents. He is fluent in English, Portuguese and Spanish and 
                                has his books published in Brazil and in the US. He is a Supply Chain professional,
                                working in such a field for more than two decades as a Director 
                                and consultant, and teaching the discipline in a major 
                                university in the Miami area. 
                            </p>

                            <p>
                                However, his deep interest in human nature and psychology
                                lead him to study the subject and get certified as a coach.
                                Today he helps both, organizations and people, to reach higher 
                                grounds. Also very spiritualistic, Marcos has studied almost 
                                all major religions and has taken advantage of his traveling 
                                to visit archaeological sites, Buddhist and Hindu temples, 
                                Mosques, Synagogues and Christian churches. He also loves 
                                history and uses most of his free time reading about it 
                                and watching related documentaries. 
                            </p>

                            <p>
                                Marcos is married to Vania Rossi and they are the proud parents of Gianlucca and Gianpietro.
                                He is the author of two books; Flowers on the Balcony 
                                (a compilation of 20 essays on different aspects of life transformation) and Bread & Joy,
                                a historic/spiritualistic romance, that leads the reader through an inspiring life journey,
                                where the unexpected always plays a surprising determinant role.
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