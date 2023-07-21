import './styles.css';

import vk from '../../img/icons/vk.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import gitHub from '../../img/icons/gitHub.svg';
import Linkedin from '../../img/icons/linkedIn.svg';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={vk} alt="link"/>
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href="#!">
                                <img src={instagram} alt="link" />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href="#!">
                                <img src={twitter} alt="link" />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href="#!">
                                <img src={gitHub} alt="link" />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href="#!">
                                <img src={Linkedin} alt="link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;