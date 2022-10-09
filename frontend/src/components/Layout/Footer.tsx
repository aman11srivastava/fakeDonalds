import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import '../../styles/footer.scss';

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>FakeDonald's</h2>
                <p>We are trying to give you the best taste possible.</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong>All right received @fakeDonalds</strong>
            </div>
            <aside>
                <h4>Follow Us</h4>
                <a target={"_blank"} href="https://instagram.com/_.amansrivastava._">
                    <AiFillInstagram />
                </a>
                <a target={"_blank"} href="https://github.com/aman11srivastava">
                    <AiFillGithub />
                </a>
                <a target={"_blank"} href="https://facebook.com/aman.srivastava.1481">
                    <AiFillFacebook />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;