import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import About from '../common/About';
import ServiceImg1 from '../../assets/images/construction2.jpg'
import ServiceImg2 from '../../assets/images/construction1.jpg'
import BlogImg from '../../assets/images/construction3.jpg'
import ServiceImg3 from '../../assets/images/engineer-4925140_1280.jpg'
import ServiceImg4 from '../../assets/images/construction6.jpg'
import NewDelhiProject from '../../assets/images/construction1212.jpg'
import Kolkata from '../../assets/images/construction3.jpg'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import AvtarImg from '../../assets/images/author-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';


const Home = () => {
    return (
        <div>
            <>
                <Header />
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
                                        <a href='#' className='btn btn-primary large'>View Projects</a>
                                        <a href='#' className='btn btn-secondary ms-2 large'>Contact Us</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                { /* about us section*/}
                <About />

                { /* our services section*/}
                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
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
                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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

                {/* Why Choose Us */}
                <section className='section-4 py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>
                                Why choose us
                            </span>
                            <h2>
                                Discover our wide variety of projects.
                            </h2>
                            <p>
                                Created in close partnership with our clients and collaborators, this approach merges industry expertise,
                                decades of experionce, innovation, and flexibikity to consitently deliver excellence.
                            </p>

                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon1} alt="" />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutitng-Edge Solutions</h3>
                                    </div>
                                    <p>
                                        Small actions create big impact. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                    </p>

                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon2} alt="" />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Superior Craftmanshift</h3>
                                    </div>
                                    <p>
                                        Small actions create big impact. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                    </p>

                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon3} alt="" />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Knowledge and Expertise</h3>
                                    </div>
                                    <p>
                                        Small actions create big impact. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                { /* our proejcts section*/}
                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
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
                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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

                                <div className='col-md-3 col-lg-3'>
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


                <section className='section-5 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>
                                Testimonials
                            </span>
                            <h2>
                                What people saying about us.
                            </h2>
                            <p>
                                We offer a diverse array of contruction services,spanning residential, commercil, and industrial projects.
                            </p>
                        </div>

                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className='content pt-4 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Qui deleniti nihil ex inventore itaque est iste autem dignissimos officia officiis, tenetur ullam laboriosam, ea unde molestiae delectus quod cum exercitationem.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvtarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className='content pt-4 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Qui deleniti nihil ex inventore itaque est iste autem dignissimos officia officiis, tenetur ullam laboriosam, ea unde molestiae delectus quod cum exercitationem.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvtarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className='content pt-4 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Qui deleniti nihil ex inventore itaque est iste autem dignissimos officia officiis, tenetur ullam laboriosam, ea unde molestiae delectus quod cum exercitationem.</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvtarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className='content pt-4 pb-2'>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Qui deleniti nihil ex inventore itaque est iste autem dignissimos officia officiis, tenetur ullam laboriosam, ea unde molestiae delectus quod cum exercitationem.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvtarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

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








                <Footer />
            </>
        </div>
    )
}

export default Home
