import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="d-flex justify-content-around background">
                <div>
                <h4>SUPPORT</h4>
                <br />
                <p> Help Center</p>
                <p>Documentation</p>
                <p>Open a Ticket</p>
                <p>FAQs</p>

                </div>
                
                <div>
                    <h4>RESOURCES</h4>
                    <br />
                    <p>Pricing</p>
                    <p>Terms of Use</p>
                    <p>Legal Disclosure </p>
                    <p>Privacy Policy </p>
                    <p>Newsletter</p>
                    
                </div>

                <div>
                    <h4>FOLLOW</h4>
                    <br />
                    
                    
                    <p>Email: travel@gmail.com</p>
                    <p>phone: 62636373</p>
                </div>
                
                
                
                
            </footer>
            <center>Ⓒ copyright 2021</center>
        </div>
    );
};

export default Footer;