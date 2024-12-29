import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
    return (
        <>
            <Header />
            <main>
                <Hero
                    preHeading='Quality.Integrity.Value.'
                    heading='Contact Us'
                    text='We excel at tranforming visions into reality <br /> through outstanding
                                craftmanship and precise.'
                />


                <section className='section-9 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>

                            <h2>
                                Contact Us
                            </h2>
                            <p>
                                Our dedicated experts are here to help you with any of your questions,
                                contact us by <br />
                                filling out form below and we will be in touch shortly</p>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-3'>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-4'>
                                        <h3>Call Us</h3>
                                        <div><a href='#'>
                                            (9098989899)
                                        </a></div>
                                        <div><a href='#'>
                                            (567908789)
                                        </a></div>



                                        <h3 className='mt-4'>You can write us:</h3>
                                        <div><a href='#'>
                                            (gautam@yopmail.com)
                                        </a></div>
                                        <div><a href='#'>
                                            (info@yopmail.com)
                                        </a></div>



                                        <h3 className='mt-4'>Address</h3>
                                        <div>
                                            kharar
                                            punjab
                                            140301
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='card shadow border-0'>
                                    <div className='card-body'>
                                        <form action="">
                                            <div className='row'>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Name</label>
                                                    <input type="text" className='form-control form-control-lg'
                                                        placeholder='Enter Name' />
                                                </div>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Email</label>
                                                    <input type="email" className='form-control form-control-lg'
                                                        placeholder='Enter Email' />
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Phone Number</label>
                                                    <input type="tel" className='form-control form-control-lg'
                                                        placeholder='Enter Phone Number' />
                                                </div>
                                                <div className='col-md-6 mb-4'>
                                                    <label htmlFor="" className='form-label'>Subject</label>
                                                    <input type="text" className='form-control form-control-lg'
                                                        placeholder='Enter Subject' />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className='form-label'>Message</label>
                                                <textarea name="" id="" rows={5} placeholder='Enter Message' className='form-control form-control-lg'></textarea>
                                            </div>

                                            <button className='btn btn-primary large mt-3'>Submit</button>
                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default ContactUs