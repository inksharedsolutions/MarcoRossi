import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/two_perspective_book.png'
import Book2 from '../../static/book/two_perspective_book_02.png'


const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'marcos-rossi',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Bread & Joy`,
                                    spanTitle: 'The Paths of Plenitude',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `War looms in the horizon in England, and Frank, a troubled
                                    young man, feels lost and unprepared, until an unconventional
                                    mentor steps in and braces him for the difcult life of a soldier.
                                    However, World War II surprises Frank in drastic ways, forcing
                                    him to return to his origins in search of a new beginning. What
                                    he fnds there, changes him forever.`,
                                    
                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/bread-joy-the-paths-of-plenitude/',
                                        barnes: 'https://www.barnesandnoble.com/w/bread-joy-marcos-h-n-rossi/1129176402?ean=9781643459080',
                                        amazon :'https://www.amazon.com/Gifted-One-William-D-Hoy-ebook/dp/B082MT8XMB/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Bread-Joy-Plenitude-Marcos-Rossi/dp/1643459074/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1591826714&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/bread-joy-marcos-h-n-rossi/1129176402?ean=9781643459073',
                                        booksamillion:'https://www.booksamillion.com/p/Bread-Joy/Marcos-H-N-Rossi/9781643459073?id=7714171848832',
                                    }
                                }}
                            />

                            <BookInfo
                                data={{
                                    title:`Flowers on the Balcony`,
                                    spanTitle: 'A Call to Action on Life Transformation',
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `If you’ve ever felt like you needed to change the
                                     world around you for the better but didn’t know
                                     where to start, then you’re not alone. Marcos H. N. Rossi 
                                     spent much of his time following predefined rules that
                                     didn’t align with his true self. But he transformed his
                                     life in a way that helped him change the world for the better.
                                     In this guidebook to success, he shares reflections on how to 
                                     accomplish personal and professional goals. You’ll find essays 
                                     on topics such as the power of perseverance, tips on harnessing
                                     your passion, and instructions on how to take advantage of midlife
                                     opportunities. You’ll also discover strategies to align your behavior
                                     with your true self, tactics to improve personal relationships, and 
                                     twenty calls to action to achieve your goals, including avoiding the 
                                     extremes and seeking balance; doing good deeds and forgiving the ones 
                                     around you, including yourself. Join Rossi as he shares how he faced everyday 
                                     challenges and found a way to win by putting Flowers on the Balcony.`,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/flowers-on-the-balcony-marcos-h-n-rossi/1113796769?ean=9781475957761',
                                        amazon :'https://www.amazon.com/Flowers-Balcony-Call-Action-Transformation-ebook/dp/B079J5DQT4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1592323054&sr=8-3', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Flowers-Balcony-Call-Action-Transformation/dp/1475957750/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1592323054&sr=8-3',
                                        barnes:'https://www.barnesandnoble.com/w/flowers-on-the-balcony-marcos-h-n-rossi/1113796769?ean=9781475957754',
                                        booksamillion:'https://www.booksamillion.com/p/Flowers-Balcony/Marcos-H-N-Rossi/9781475957754?id=7714171848832',
                                    }
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;