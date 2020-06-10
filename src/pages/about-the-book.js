import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/two_perspective_book.png'


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
                                    `War looms in the horizon in England, and Frank,
                                     a troubled young man, feels lost and unprepared, 
                                     until an unconventional mentor steps in and begins
                                     to prepare him for the difficult life of a soldier. 
                                     However, World War II surprises Frank in drastic ways,
                                     forcing him to return to his origins in search of a new beginning.
                                     What he finds there changes him forever.`,
                                    
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