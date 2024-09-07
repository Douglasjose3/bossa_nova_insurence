import './myMap.css';

function MyMap() {
    return (
        <div className='myMap-div'>
            <iframe className='myMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25183.275479610737!2d-122.3271028383394!3d37.909179499631676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085791cf67090cf%3A0xd3aadeb1e1deff78!2sBossa%20Nova%20Insurance%20Services%2C%20LLC!5e0!3m2!1spt-BR!2sus!4v1725649834849!5m2!1spt-BR!2sus" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MyMap;