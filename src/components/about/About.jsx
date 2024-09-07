import './about.css'

function About() {
    return (
        <div id='about'>
            <div className="container d-flex">
                <div className='about-section'>
                    <div className='row'>
                        <div className='col-md-4 title-about'>
                            <h1 className="big-title"><span>Bossa  <br /> Nova</span> <br /> Insurance <br /> Service</h1>
                            <h4 className='p-about dm-serif-display-regular pt-2'>
                                Fully-Licensed Brokers - <span className='since'>Since 2002</span> <br />
                                <span className='license'>License #0G27883</span>
                            </h4>
                        </div>
                        <div className='col-lg-1'>
                            <span></span>
                        </div>
                        <div className='col-lg-7 img-div'>
                            <img className='img-about' src="./src/assets/wellness.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
