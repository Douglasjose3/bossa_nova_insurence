import Aos from 'aos';
import 'aos/dist/aos.css'
import './services.css'
import { useEffect } from 'react';

function Services() {
    useEffect (() => {
        Aos.init();
    }, []);

    return (
        <div className='services-section'>
            <div className='container' id='services'>
                <div className='services-content'>
                <h3 className='sub-title'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    What we do!
                </h3>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Homeowners, Auto & Liability Insurance</h4>
                                    <p>
                                        <span className='p-bold'>Homeowners Insurance:</span> Protects your home and belongings, and covers legal liability for accidents on your property. <br />
                                        <span className='p-bold'>Auto Insurance:</span> Covers costs from accidents, including repairs, replacements, and medical expenses. <br />
                                        <span className='p-bold'>Liability Insurance:</span> Provides financial protection against damages to others or their property.
                                    </p>
                                </div>
                                <div className='shadowOne'></div>
                                <div className="shadowTwo"></div>
                            </div>
                        </div>
                        
                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="zoom-in">
                                    <div className='services-icon'>
                                        <img src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Professional Liability</h4>
                                    <p>This insurance safeguards professionals against claims of errors, omissions, or negligence in their services. It covers legal defense costs, any required settlements, and compensates for financial losses if a client alleges damages due to the professional’s mistakes. Additionally, it ensures that professionals are protected against potential lawsuits, financial risks, and reputational damage that could arise from even small errors in their work.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>General Liability Insurance</h4>
                                    <p>Essential protection for businesses, covering costs related to bodily injury, property damage, and legal risks during business operations. This insurance not only covers medical expenses from workplace accidents but also handles repair costs for damages to third-party property. Additionally, it protects the business from significant legal expenses that may arise from lawsuits, including attorney fees and court costs. This coverage ensures the company does not suffer financial losses due to unforeseen events.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Business Owners Insurance Policy (BOP)</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="zoom-in">
                                    <div className='services-icon'>
                                        <img src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Errors & Omissions Insurance (E&O)</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Workers Compensation</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Vehicle Registration & Renewal Service</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="zoom-up">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Commercial Auto Coverage</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Bonds & Umbrella Plans</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Renters Insurance & Landlord Protection Coverage</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="zoom-in">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Motorcycle, Boat/Watercraft & Recreational Vehicle Insurance</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Uber & Lyft Ride-Share Drivers Coverage</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Personal & Commercial Lines</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="zoom-in">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Surety Bonds</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='main'>
                                <div className='services' data-aos="fade-right">
                                    <div className='services-icon'>
                                        <img className='' src="../public/cotacao.svg" alt="" />
                                    </div>
                                    <h4>Excess Liability Etc.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere explicabo ea veniam doloremque soluta, itaque maxime nesciunt cumque commodi exercitationem vel eveniet illo quam vitae corrupti quia animi. Neque.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;