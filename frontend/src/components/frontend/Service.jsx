import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ServiceImg1 from '../../assets/images/construction2.jpg'
import ServiceImg2 from '../../assets/images/construction1.jpg'
import ServiceImg3 from '../../assets/images/engineer-4925140_1280.jpg'
import ServiceImg4 from '../../assets/images/construction6.jpg'
const Service = () => {
    return (
        <>
            <Header />
            <main>
                <Hero
                    preHeading='Quality.Integrity.Value.'
                    heading='Services'
                    text='We excel at tranforming visions into reality <br /> through outstanding
                                craftmanship and precise.'
                />


                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>
                                Our Services
                            </span>
                            <h2>
                                Our Construction Services
                            </h2>
                            <p>
                                We offer a diverse array of contruction services,spanning residential, commercil, and industrial projects.
                            </p>
                            <div className='row pt-4'>
                                <div className='col-md-4 col-lg-4'>
                                    <div className='item'>

                                        <div className='service-image'>
                                            <img src={ServiceImg1} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Speciality Contruction
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
                                            <img src={ServiceImg2} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Civil Contruction
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
                                            <img src={ServiceImg3} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Residential Contruction
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
                                            <img src={ServiceImg3} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Residential Contruction
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
                                            <img src={ServiceImg3} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Residential Contruction
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
                                            <img src={ServiceImg4} alt="service-image" className='w-100' />
                                        </div>

                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>
                                                    Corporate Contruction
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

export default Service
