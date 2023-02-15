import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <h3 className="logo">🚙 Garagem de carros Senac 🚗</h3>

            </div>
            <div class="footer-bottom">
                <p className="logo"><Link to={`/`}>copyright &copy;2023</Link></p>
                <div class="footer-menu">
                    <ul class="f-menu">
                        <p className="logo"><a href="https://github.com/dualsgo/squad-3">Github</a></p>
                        <p className="logo"><a href="https://squad-3.netlify.app">Netlify</a></p>
                    </ul >
                </div >
            </div>
        </footer >
    );
};


export default Footer;