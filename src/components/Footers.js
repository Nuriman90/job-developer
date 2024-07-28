import React from 'react';
import { Footer } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footers = () => {
    return (
        <Footer container={true}>
            <div className="w-screen">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/#"
                            src="https://cdn-icons-png.flaticon.com/512/2640/2640740.png"
                            alt="Flowbite Logo"
                            name="Job Developer"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link to="#">
                                    Flowbite
                                </Footer.Link>
                                <Footer.Link to="#">
                                    Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link to="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link to="#">
                                    Instagram
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link to="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link to="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        to="#"
                        by="Made By Nur Iman™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footers