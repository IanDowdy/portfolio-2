import React from 'react';
import { Media } from 'reactstrap';
import LinkedIn from '../../assets/pictures/linkedIn.png';
import Phone from '../../assets/pictures/phone.png';
import Email from '../../assets/pictures/mail.png'
import Github from '../../assets/pictures/github.png';
import './contact.css';

const Example = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12" >
                    <h1 className="contactHeader">Get in touch with me!</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">

                    <Media>
                        <Media left top href="https://linkedin.com/in/ian-dowdy-33b917111">
                            <Media object src={LinkedIn} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading className="heading" href="https://linkedin.com/in/ian-dowdy-33b917111">
                                <a className="hyperlink" href="linkedin.com/in/ian-dowdy-33b917111">linkedin.com/in/ian-dowdy-33b917111</a>
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mt-1">
                        <Media left middle href="#">
                            <Media object src={Phone} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading className="heading">
                                (830) 305-9662
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mt-1">
                        <Media left bottom href="#">
                            <Media object src={Email} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading className="heading">
                                dowdy_ian@outlook.com
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mt-1">
                        <Media left bottom href="https://github.com/IanDowdy">
                            <Media object src={Github} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading className="heading" href="https://github.com/IanDowdy">                               
                                    <a className="hyperlink" href="https://github.com/IanDowdy">IanDowdy</a>
                            </Media>
                        </Media>
                    </Media>
                </div>
            </div>
        </div>
    );
};

export default Example;