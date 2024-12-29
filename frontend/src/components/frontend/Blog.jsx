import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImg from '../../assets/images/construction3.jpg'

const Blog = () => {
    return (
        <>
            <Header />
            <main>
                <Hero
                    preHeading='Quality.Integrity.Value.'
                    heading='Blogs'
                    text='We excel at tranforming visions into reality <br /> through outstanding
                                craftmanship and precise.'
                />

                <section className='section-6 bg-light py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>
                                Blog & news
                            </span>
                            <h2>
                                Articles & Blog Posts
                            </h2>
                            <p>
                                We offer a diverse array of contruction services,spanning residential, commercil, and industrial projects.
                            </p>
                        </div>
                        <div className='row pt-3'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href="#" className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>

                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href="#" className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>

                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href="#" className='title'>Dummy Blog Title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Blog
