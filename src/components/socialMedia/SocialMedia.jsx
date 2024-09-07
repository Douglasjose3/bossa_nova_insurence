import Aos from 'aos';
import 'aos/dist/aos.css'
import './socialMedia.css';
import { useEffect } from 'react';

function SocialMedia() {
    useEffect (() => {
        Aos.init();
    }, []);
    return (
        <section className="bg-socialMedias">
            <div className="container">
                <h3 className="sub-title" data-aos="fade-right">Social Medias</h3>
                <div className="row justify-content-aroud text-center pb-5">
                    <div className="icon-social col-lg-3">
                        <a href="https://facebook.com">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                    <div className="icon-social col-lg-3">
                        <a href="https://instagram.com">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="icon-social col-lg-3">
                        <a href="#">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                    <div className='icon-social col-lg-3'>
                        <a href="#">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SocialMedia;