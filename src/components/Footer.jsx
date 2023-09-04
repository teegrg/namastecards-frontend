import { IoLogoLinkedin,  IoLogoGithub } from "react-icons/io";
import twitter from "../pages/image/twitter.png"
function Footer() {
    return (
        <>

        <div className="footer-wrapper">
            
        <div className="footer">
            <p>EAT, CODE AND SLEEP ©</p>
            <p>Pursuit 9.6</p>
            <p>All Rights Reserved</p>
        </div>
        <div className="footer-icon">
            <a href='https://github.com/teegrg' target="_blank" rel="noopener noreferrer" className="footer-link"><IoLogoGithub/></a>
            <a href='https://www.linkedin.com/in/tsheringgurungny/' target="_blank" rel="noopener noreferrer" className="footer-link"><IoLogoLinkedin/></a>
            <a href='https://www.linkedin.com/in/tsheringgurungny/' target="_blank" rel="noopener noreferrer" className="footer-link"><img className="footer-bird" src={twitter} alt="" /></a>
        </div>
        </div>
        </>
    )
};

export default Footer;