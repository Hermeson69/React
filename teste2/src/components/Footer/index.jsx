import  './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="Footer">
            <div className="footer-container">
            <div className='contact'>
            <a className="footer-icon" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
                (xx) xxxxx-xxxx
            </div>
            Feito por Hermeson Alves &copy; 2023.
            </div>
        </footer>
    )
}

export default Footer;