import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import NewDelhiProject from '../../assets/images/construction1212.jpg'
import Kolkata from '../../assets/images/construction3.jpg'
import ServiceImg1 from '../../assets/images/construction2.jpg'

const Project = () => {
    return (
        <>
            <Header />

            <main>
                <Hero
                    preHeading='Quality.Integrity.Value.'
                    heading='Our Projects'
                    text='We excel at tranforming visions into reality <br /> through outstanding
                                craftmanship and precise.'
                />


                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>
                                Our Projects
                            </span>
                            <h2>
                                Discover our diverse range of projects.
                            </h2>
                            <p>
                                We offer a diverse array of contruction services,spanning residential, commercil, and industrial projects.
                            </p>
                            <div className='row pt-4'>
                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={Kolkata} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Kolkata Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


                                    </div>

                                </div>

                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={Kolkata} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Kolkata Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


                                    </div>

                                </div>

                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={Kolkata} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Kolkata Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


                                    </div>

                                </div>

                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={NewDelhiProject} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    New Delhi Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


                                    </div>

                                </div>

                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={ServiceImg1} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Kanpur Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


                                    </div>

                                </div>

                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={NewDelhiProject} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Luckhnow Project
                                                </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                                </p>
                                            </div>
                                            <a href='#' className='btn btn-primary small'>Read More</a>
                                        </div>


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

export default Project
