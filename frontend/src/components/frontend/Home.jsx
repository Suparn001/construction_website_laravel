import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
const Home = () => {
    return (
        <div>
            <>
                <Header/>
                <main>
                    {/* Hero Section*/}
                    <section className='section-1'>
                        <div className='hero d-flex align-items-center'>
                            <div className='container-fluid'>
                                <div className='text-center'>
                                    <span>Welcome to GAUTAM Constructions</span>
                                    <h1>
                                        Crafting dreams with <br />compassion, perfection and excellence.
                                    </h1>
                                    <p>
                                        We excel at tranforming visions into reality through outstanding
                                        craftmanship and precise <br />attention to detail. With years of experience and
                                        a dediaction to quality.
                                    </p>
                                    <div className='mt-4'>
                                        <a href='#' className='btn btn-primary'>View Projects</a>
                                        <a href='#' className='btn btn-secondary ms-2'>Contact Us</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                { /* about us section*/}
                <section className='section-2 py-5'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={AboutImg} className='w-100' />
                            </div>
                            <div className='col-md-6'>
                                <span>
                                    About Us
                                </span>
                                <h2>
                                    Crafting structures that last a lifetime
                                </h2>
                                <p>
                                    Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.
                                </p>

                                <p>
                                    Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>


        </div>
    )
}

export default Home
