import React from 'react';
import Logo from '../assets/img/logo_morroco_view2.svg';

const Footer: React.FC = () => {
    return (
        <div className="footer bg-[#AE1913] text-white">
            <div className="content max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logos */}
                <div className="logos flex flex-col justify-around items-center">
                    <div className="bg-white p-3 rounded-lg">
                        <img
                            src={Logo}
                            alt="Morocco View Logo"
                            style={{ height: '120px' }} 
                        />
                    </div>
                </div>


                {/* Navigation */}
                <div className="social-media flex flex-col space-y-2 text-center md:text-left">
                    {[
                        { href: '#home', label: 'Home' },
                        { href: '#events', label: 'Events' },
                        { href: '#services', label: 'Services' },
                        { href: '#explore', label: 'Explore' },
                        { href: '#pricing', label: 'Pricing' },
                        { href: '#experience', label: 'Experience' },
                    ].map((link) => (
                        <p key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-primary-500 transition"
                            >
                                {link.label}
                            </a>
                        </p>
                    ))}
                </div>

                {/* Contacts */}
                <div id="footer-contact" className="links flex flex-col space-y-4 items-center md:items-start">
                    <a href="tel:8001289999" className="flex items-center space-x-2 hover:text-primary-500 transition">
                        <img src="https://ta.sdaia.gov.sa/assets/img/en/phone.svg" alt="Phone" />
                        <span>+2121289999</span>
                    </a>
                    <a
                        href="https://twitter.com/tawakkalnaapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-primary-500 transition"
                    >
                        <img src="https://ta.sdaia.gov.sa/assets/img/en/twitter-fill-1.svg" alt="Twitter" />
                        <span>@Morocco_View</span>
                    </a>
                    <a
                        href="mailto:contact@tawakkalna.gov.sa"
                        className="flex items-center space-x-2 hover:text-primary-500 transition"
                    >
                        <img src="https://ta.sdaia.gov.sa/assets/img/en/Message_fill.svg" alt="Email" />
                        <span>contact@moroccoView.com</span>
                    </a>
                </div>

                {/* App Downloads */}
                <div className="details text-center md:text-left">
                    <p className="font-semibold mb-4">Download the app</p>
                    <div className="footer-buttons flex flex-col space-y-2 items-center md:items-start">
                        <a
//href="https://apps.apple.com/sa/app/tawakkalna-services/id1613539452"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn inline-block"
                        >
                            <img src="https://ta.sdaia.gov.sa/assets/img/ar/apple.svg" alt="App Store" />
                        </a>
                        <a
                           // href="https://play.google.com/store/apps/details?id=sa.gov.nic.twkhayat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn inline-block"
                        >
                            <img src="https://ta.sdaia.gov.sa/assets/img/ar/google.svg" alt="Google Play" />
                        </a>
                        <a
                       //     href="https://appgallery5.huawei.com/#/app/C105842523"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn inline-block"
                        >
                            <img src="https://ta.sdaia.gov.sa/assets/img/ar/AppGallery.svg" alt="AppGallery" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            <footer className="footer-end bg-[#FFF7F7] py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© All rights reserved, Morocco View , 2025</p>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 md:mt-0">
                        <a
                            // href=""
                            className="hover:text-primary-500 transition">
                            User Guide
                        </a>
                        <a
                            // href="" 
                            className="hover:text-primary-500 transition">
                            Privacy Policy
                        </a>
                        <a
                            //href="" 
                            className="hover:text-primary-500 transition">
                            Terms and Conditions
                        </a>
                        <a
                            //href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            download=""
                            className="hover:text-primary-500 transition"
                        >
                            Service Level Agreement
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
