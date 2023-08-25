import { IoLogoLinkedin,  IoLogoGithub } from "react-icons/io";

function Footer() {
    return (
        <>
    <hr />
        <div className="footer-wrapper">
            
        <div className="footer">
            <p>EAT, CODE AND SLEEP©</p>
            <p>Pursuit 9.6</p>
            <p>All Rights Reserved</p>
        </div>
        <div className="footer-icon">
            <a href='https://www.linkedin.com/in/tsheringgurungny/' target="_blank" rel="noopener noreferrer" className="footer-link"><img src="../pages/x.png" alt="" /></a>
            <a href='https://www.linkedin.com/in/tsheringgurungny/' target="_blank" rel="noopener noreferrer" className="footer-link"><IoLogoLinkedin/></a>
            <a href='https://github.com/teegrg' target="_blank" rel="noopener noreferrer" className="footer-link"><IoLogoGithub/></a>
        </div>
        </div>
        </>
    )
};

export default Footer;